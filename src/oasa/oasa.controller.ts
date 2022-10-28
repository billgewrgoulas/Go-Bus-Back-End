import { Controller } from '@nestjs/common';
import { Body, Get, Header, Param, Post } from '@nestjs/common/decorators';
import { OasaService } from './oasa.service';

@Controller('oasa')
export class OasaController {

    constructor(private dataService: OasaService){}

    @Post('/schedule')
    @Header('Content-Type', 'application/json')
    public async getLineSchedule(@Body() data: any){

        const schedule = await this.dataService.getSchedules(data.lineCode, data.ml, data.sdc);
        const start_times: string[] = [];
        const end_times: string[] = [];
        
        if(schedule.data){

            schedule.data['come'].forEach((sch: any) => {
                
                const start: string = sch['sde_start1'];
                const end: string = sch['sde_start2'];

                if(start){
                    start_times.push(start.split(' ')[1].slice(0, -3));
                }

                if(end){
                    end_times.push(end.split(' ')[1].slice(0, -3));
                }

            });

            schedule.data['go'].forEach((sch: any) => {
                
                const start: string = sch['sde_start1'];
                const end: string = sch['sde_start2'];

                if(start){
                    start_times.push(start.split(' ')[1].slice(0, -3));
                }

                if(end){
                    end_times.push(end.split(' ')[1].slice(0, -3));
                }

            });
        }

        return {sdc_code: data.sdc, line_code: data.lineCode, start_times: start_times, end_times: end_times};
    }

    @Get('/bus-locations/:code')
    @Header('Content-Type', 'application/json')
    public async getBusLocations(@Param('code') code: string){

        const results = await <any>this.dataService.getBusLocations(code);
        const data = results.data.map((bus: any) => {
            return {
                ...bus,
                PASSENGERS: '0'
            };
        });

        if(data){
            return {
                ROUTE_CODE: code,
                buses: data
            };
        }else{
            return undefined;
        }
    }   

    @Post('/update-arrivals')
    @Header('Content-Type', 'application/json')
    public async getArrivalUpdates(@Body() stopCodes: any){
        
        const requests: Promise<any>[] = [];
        stopCodes.forEach((code: any) => {
           requests.push(this.dataService.getStopArrivals(code)); 
        });

        const results = await Promise.all(requests);
        const response: any = [];
        results.forEach((result, index)=>{
            let details = result.data;
            if(!details){
                details = [];
            }
            response.push({stop_code: stopCodes[index], arrivalDetails: details });
        });

        return response;
    }

    @Get('/lines')
    @Header('Content-Type', 'application/json')
    public async getLines(){
        const response = await<any>this.dataService.getAllLines();
        return response.data;
    }

    @Get('/routeDetails/:code')
    @Header('Content-Type', 'application/json')
    public async getRouteDetails(@Param('code') code: string){

        const requests: Promise<any>[] = [
            <any>this.dataService.getRouteDetails(code),
            <any>this.dataService.getMLInfo(code)
        ];

        const res = await Promise.all(requests);
        return {routes: res[0].data, mlInfo: res[1].data, lineCode: code};
    }

    @Get('/path/:code')
    @Header('Content-Type', 'application/json')
    public async getPaths(@Param('code') code: string){
        const response = await <any>this.dataService.getPath(code);
        return {
            stops: response.data['stops'], 
            path: response.data['details'].map((e: any) => [e.routed_y, e.routed_x]),
            routeCode: code
        };
    }

    @Get('/arrivals/:code')
    @Header('Content-Type', 'application/json')
    public async getArrivals(@Param('code') code: string){
        const response = await <any>this.dataService.getStopArrivals(code);
        return response.data;
    }

    @Get('/linesIO')
    @Header('Content-Type', 'application/json')
    public async getLinesIO(){
        const response = await <any>this.dataService.getLines();
        return response.data;
    }

    @Get('/routeIO/:code')
    @Header('Content-Type', 'application/json')
    public async getRoute(@Param('code') code: string){
        const response = await <any>this.dataService.getRoute(code);
        return response.data;
    }

    @Get('/routePoints/:code')
    @Header('Content-Type', 'application/json')
    public async getRoutePoints(@Param('code') code: string){
        const response = await <any>this.dataService.getRoutePoints(code);
        return response.data;
    }



}
