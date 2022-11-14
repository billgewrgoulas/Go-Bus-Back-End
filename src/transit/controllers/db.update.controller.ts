import { Controller, Get, Header } from '@nestjs/common';
import { DBUpdateService } from '../services/db.update.service';
import { Route } from '../entities/route.entity';
import { RouteStop } from '../entities/routeStops.entity';
import { LineService } from '../services/line.service';
import { PointService } from '../services/points.service';
import { RouteService } from '../services/routes.service';
import { ScheduleService } from '../services/schedule.service';
import { StopService } from '../services/stop.service';

@Controller('update')
export class DBupdateController {

    constructor(
		private lines: LineService,
		private routes: RouteService, 
		private points: PointService,
		private stops: StopService,
		private schedules: ScheduleService,
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
    public async populateTrips(){

        // const routes: Route[] = await this.transit.getRoutes();

        // for (const route of routes) {
        //     const tripsPromise = await <any>this.oasa.getRouteTrips(route.code);
        //     if(tripsPromise){
        //         await this.transit.saveSchedule(tripsPromise.data);
        //     }
        // }

        // return 'ok';
    }

}
