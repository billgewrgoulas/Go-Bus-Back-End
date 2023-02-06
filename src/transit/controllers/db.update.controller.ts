import { Controller, Get, Header } from '@nestjs/common';
import { DBUpdateService } from '../services/db.update.service';
import { Route } from '../entities/route.entity';
import { Schedule } from '../entities/schedule.entity';
import { DataService } from '../services/data.service';
import { Trip } from '../entities/trip.entity';
import { Line } from '../entities/line.entity';
import { Stop } from '../entities/stop.entity';
import { RouteStop } from '../entities/routeStops.entity';
import { Point } from '../entities/point.entity';
import { Cron, Interval } from '@nestjs/schedule';
const greekUtils = require('greek-utils');


@Controller('update')
export class Scheduler {

    constructor(
		private data: DataService,
        private db: DBUpdateService
	){}

    //@Interval(100000)
    public async scheduler(){
        await this.populateLines();
        await this.populateRoutes();
        await this.populateStops();
        await this.populatePaths();
        await this.populateRouteStops();
        await this.populateSchedule();
        await this.fixScheduleTimes();
        await this.populateTrips();
    }

    @Get('/lines')
    @Header('Content-Type', 'application/json')
    public async populateLines(){

        const request = await <any>this.db.getLines();
        const lines: Line[] = [];

        for (const line of request.data) {
            const newLine = new Line();
            newLine.id = line.id;
            newLine.name = line.code;
            newLine.routesNumber = line.routes.length;
            newLine.desc = line.name;
            newLine.desc_eng = greekUtils.toGreeklish(line.name); 
            newLine.routeCodes = line.routes.map((route: any) => route.code);
            lines.push(newLine);       
        }

        await this.data.lines.insert(lines);

        return 'ok';
    }

    @Get('/routes')
    @Header('Content-Type', 'application/json')
    public async populateRoutes(){

        const request = await <any>this.db.getRoutes();
        const routes: Route[] = [];

        for (const route of request.data) {
            const newRoute: Route = new Route();
            newRoute.code = route.code;
            newRoute.id = route.id;
            newRoute.desc = route.name;
            newRoute.desc_eng = greekUtils.toGreeklish(route.name);
            newRoute.lineId = route.lines[0].id;
            newRoute.direction = route.direction;
            routes.push(newRoute);
        }

        await this.data.routes.insert(routes);

        return 'ok';
    }

    @Get('/stops')
    @Header('Content-Type', 'application/json')
    public async populateStops(){

        const request = await <any>this.db.getStops();
        const stops: Stop[] = [];
        
        for (const stop of request.data) {
            const newStop: Stop = new Stop();
            newStop.code = stop.code;
            newStop.id = stop.id;
            newStop.desc = stop.name;
            newStop.desc_eng = greekUtils.toGreeklish(stop.name);
            newStop.latitude = stop.latitude;
            newStop.longitude = stop.longitude;
            newStop.lines = stop.lineCodes;
            stops.push(newStop);
        }

        await this.data.stops.insert(stops);
        return 'ok';
    }

    @Get('/routePaths')
    @Header('Content-Type', 'application/json')
    public async populatePaths(){

        const routes: Route[] = await this.data.routes.getRoutes();

        for (const route of routes) {

            const infoprom = await <any>this.db.getRoutePoints(route.code);
            const points: Point[] = [];
            
            for (const point of infoprom.data) {
                const newPoint: Point = {...point};
                newPoint.routeCode = route.code;
                points.push(newPoint);
            }

            await this.data.points.insert(points);
        }
        
        return 'ok';
    }

    @Get('/routeStops')
    @Header('Content-Type', 'application/json')
    public async populateRouteStops(){

        const routes: Route[] = await this.data.routes.getRoutes();

        for (const route of routes) {

            const infoprom = await <any>this.db.getRouteInfo(route.code);
            const stopCodes: string[] = [];
            const rss: RouteStop[] = [];

            for (const stop of infoprom.data.stops) {
                const rs: RouteStop = new RouteStop();
                rs.routeCode = route.code;
                rs.stopCode = stop.code;
                rss.push(rs);
                stopCodes.push(stop.code);
            }

            await this.data.routes.insertStopCodes(stopCodes, route.code);
            await this.data.rs.insert(rss);
        }
        
        return 'ok';
    }

    @Get('/updateTrips')
    @Header('Content-Type', 'application/json')
    public async populateSchedule(): Promise<string>{

        const routes: Route[] = await this.data.routes.getRoutes();

        for (const route of routes) {
            const tripsPromise = await <any>this.db.getScedule(route.code);
            if(tripsPromise){
                const trips: Schedule[] = [];
                for (const trip of tripsPromise.data) {
                    let new_trip: Schedule = new Schedule();
                    new_trip = {...trip};
                    new_trip.line = trip.lineCode;
                    new_trip.trip_id = trip.id;
                    trips.push(new_trip);
                }

                await this.data.schedule.insertTrips(trips);
            }
        }

        return 'ok';
    }

    @Get('/fix')
    public async fixScheduleTimes(): Promise<string>{

        const ids: any[] = await this.data.schedule.getIds();

        let i = 0;
        for (const id of ids) {

            const trip: Schedule[] = await this.data.schedule.getTripOne(+id.trip_id);
            const stops: Stop[] = await this.data.stops.getRouteStops(trip[0].routeCode);
            const new_trip: Schedule[] = trip.map(t => ({...t}));
            const times: number[] = [];

            for (let i = 0; i < stops.length - 1; i++) {

                const s = stops[i].latitude + ',' + stops[i].longitude;
                const e = stops[i + 1].latitude + ',' + stops[i + 1].longitude;
                const plan: any = await this.data.otp.getBus(s, e);
                const it = plan.data.plan.itineraries[0];

                if(!it){
                    continue
                }

                const duration: number = Math.ceil(it.duration/60);
                times.push(duration);
            }

            if(times.length > 0){
                let minute = +new_trip[0].tripTimeMinute;
                let hour = +new_trip[0].tripTimeHour;
                for (let i = 1; i < new_trip.length; i++) {

                    if(i >= times.length){
                        minute += times[i - 2];
                    }else{
                        minute += times[i - 1];
                    }

                    if(minute > 59){
                        minute = minute - 60;
                        hour++;
                    }

                    let arrival: string = '' + minute;
                    if(minute < 10){
                        arrival = '0' + minute;
                    }

                    new_trip[i].tripTimeMinute = minute;
                    new_trip[i].tripTimeHour = hour;
                    new_trip[i].tripTime = hour + ':' + arrival;
                }

                await this.data.ns.insert(new_trip);
                console.log(i);
                i++;
            }
        }

        return 'ok';
    }

    @Get('/replace')
    public async replace(): Promise<string>{

        const schedules: Schedule[] = await this.data.ns.getAll();
        await this.data.schedule.insertTrips(schedules);
        return 'ok';

    }

    @Get('/populateTrips')
    public async populateTrips(): Promise<string>{
        const schedules: Schedule[] = await this.data.schedule.getAll();
        const trips: Trip[] = [];

        for (const sch of schedules) {
            const trip: Trip = new Trip();
            trip.debarkation = 0;
            trip.embarkation = 0;
            trip.occupied = 0;
            trip.stopCode = sch.stopCode;
            trip.totalSeats = 50;
            trip.trip_id = sch.trip_id;
            trip.id = sch.id;
            trip.routeCode = sch.routeCode;
            trip.time = sch.tripTime;
            trips.push(trip);
        }

        await this.data.trips.insertTrips(trips);
        return 'ok';
    }

    private sleep(duration: number): Promise<void>{
        return new Promise((resolve) => setTimeout(resolve, duration));
    }

}
