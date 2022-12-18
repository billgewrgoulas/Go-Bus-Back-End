import { Controller, Get, Header } from '@nestjs/common';
import { DBUpdateService } from '../services/db.update.service';
import { Route } from '../entities/route.entity';
import { Schedule } from '../entities/schedule.entity';
import { DataService } from '../services/data.service';
import { Trip, TripStatus } from '../entities/tripStatus';

@Controller('update')
export class DBupdateController {

    constructor(
		private data: DataService,
        private db: DBUpdateService
	){}

    @Get('/lines')
    @Header('Content-Type', 'application/json')
    public async populateLines(){

        //const request = await <any>this.oasa.getLines();

        // for (const line of request.data) {
        //     const newLine = new Line();
        //     newLine.id = line.id;
        //     newLine.name = line.name;
        //     newLine.routesNumber = line.routesNumber;
        //     newLine.desc = line.description.el;
        //     newLine.desc_eng = line.description.en;
        //     const routes: Route[] = [];
        //     line.routes.forEach((route: any)=>{
        //         const newRoute = new Route();
        //         newRoute.code = route.code;
        //         newRoute.desc = route.description.el;
        //         newRoute.desc_eng = route.description.en;
        //         newRoute.direction = route.direction;
        //         newRoute.id = route.id;
        //         newRoute.lineId = line.id;
        //         routes.push(newRoute);
        //     });
        //     await this.transit.populateLines(newLine, routes);
        // }

        return '';
    }

    @Get('/routeStops')
    @Header('Content-Type', 'application/json')
    public async populateStopsRoute(){

        // const routes: Route[] = await this.db.getRoutes();

        // for(const route of routes){
            
        //     const values: RouteStop[] = [];
        //     route.stopCodes.forEach((stopCode) =>{
        //         const routeStop = new RouteStop;
        //         routeStop.routeCode = route.code;
        //         routeStop.stopCode = stopCode;
        //         values.push(routeStop);
        //     });

        //     await this.transit.saveRouteStop(values); 
        // };

        
    }

    @Get('/updateTrips')
    @Header('Content-Type', 'application/json')
    public async populateTrips(): Promise<string>{

        const routes: Route[] = await this.data.routes.getRoutes();

        for (const route of routes) {
            const tripsPromise = await <any>this.db.getRouteTrips(route.code);
            if(tripsPromise){

                await this.sleep(200);

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

    @Get('/populateTrips')
    public async populate(): Promise<string>{
        const schedules: Schedule[] = await this.data.schedule.getAll();

        const trips: Trip[] = [];

        for (const sch of schedules) {
            const trip: Trip = new Trip();
            trip.debarkation = 0;
            trip.embarkation = 0;
            trip.occupied = 0;
            trip.stopCode = sch.stopCode;
            trip.totalSeats = 30;
            trip.trip_id = sch.trip_id;
            trip.id = sch.id;
            trip.tripTime = sch.tripTime;
            trips.push(trip);
        }

        await this.data.trips.insertTrips(trips);
        return 'ok';
    }

    @Get('/populateTripStatus')
    public async populateStatuses(): Promise<string>{
        const schedules: Schedule[] = await this.data.schedule.getAll();

        const trips: TripStatus[] = [];
        const set = new Set<number>();

        for (const sch of schedules) {

            if(!set.has(sch.trip_id)){
                const trip: TripStatus = new TripStatus();
                trip.occupied = 0;
                trip.totalSeats = 30;
                trip.trip_id = sch.trip_id;
                trips.push(trip);
                set.add(sch.trip_id);
            }

        }

        await this.data.tripStatus.insertDetails(trips);
        return 'ok';
    }

    @Get('/stopLines')
    public async stopLines(): Promise<any>{

        const stops: any[] = await this.data.stops.getStopLines();
        const dict = {};

        for (const stop of stops) {
            if(dict[stop.code]){
                dict[stop.code].push(stop.name);
            }else{
                dict[stop.code] = [stop.name];
            }
        }

        for (const key in dict) {
            this.data.stops.updateStopLines(dict[key], key);
        }

        return 'ok';
        
    }


    private sleep(duration: number): Promise<void>{
        return new Promise((resolve) => setTimeout(resolve, duration));
    }

}
