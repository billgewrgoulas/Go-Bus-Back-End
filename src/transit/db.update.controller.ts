import { Controller, Get, Header } from '@nestjs/common';
import { OasaService } from 'src/oasa/oasa.service';
import { LineDto } from 'src/user/dto/line.dto';
import { PointDto } from 'src/user/dto/point.dto';
import { RouteDto } from 'src/user/dto/route.dto';
import { StopDto } from 'src/user/dto/stop.dto';
import { DBUpdateService } from './db.update.service';
import { Line } from './entities/line.entity';
import { Point } from './entities/point.entity';
import { Route } from './entities/route.entity';
import { RouteStop } from './entities/routeStops.entity';

import { Stop } from './entities/stop.entity';


@Controller('update')
export class DBupdateController {

    constructor(private oasa: OasaService, private transit: DBUpdateService){}

    @Get('/lines')
    @Header('Content-Type', 'application/json')
    public async populateLines(){

        const request = await <any>this.oasa.getLines();

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

        return request.data;
    }

    @Get('/routeStops')
    @Header('Content-Type', 'application/json')
    public async populateStopsRoute(){

        const routes: Route[] = await this.transit.getRoutes();

        for(const route of routes){
            
            const values: RouteStop[] = [];
            route.stopCodes.forEach((stopCode) =>{
                const routeStop = new RouteStop;
                routeStop.routeCode = route.code;
                routeStop.stopCode = stopCode;
                values.push(routeStop);
            });

            await this.transit.saveRouteStop(values); 
        };

        
    }

    


    

}
