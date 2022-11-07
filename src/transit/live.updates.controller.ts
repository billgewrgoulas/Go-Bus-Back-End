import { Controller, Get, Header, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { Arrival } from 'src/user/dto/arrival.dto';
import { Stop } from './entities/stop.entity';
import { LiveUpdatesService } from './live.updates.service';
import { TransitService } from './transit.service';

@Controller('live')
export class LiveUpdatesController {

    constructor(private liveService: LiveUpdatesService, private transitService: TransitService){}

    @Get('/stops/:code')
    @Header('Content-Type', 'application/json')
    public async getLines(@Param('code') code: string): Promise<Arrival[]>{

        const arrivalsPromise = <any>await this.liveService.getStopArrivals(code);
        const arrivals: Arrival[] = [];

        if(arrivalsPromise && arrivalsPromise.data.vehicles){
            arrivalsPromise.data.vehicles.forEach((e: any) => {
                const arrival = new Arrival(e);
                arrivals.push(arrival);
            });
        }
        
        return arrivals;
    }

    @Get('/lines/:code')
    @Header('Content-Type', 'application/json')
    public async getBusLocations(@Param('code') code: string): Promise<Arrival[]>{

        const arrivalsPromise = <any>await this.liveService.getBusLocations(code);
        const arrivals: Arrival[] = [];

        if(arrivalsPromise && arrivalsPromise.data){
            for (const e of arrivalsPromise.data) {
                const arrival = new Arrival(e);
                arrivals.push(arrival);
            }
        }   
        
        return arrivals;
    }

}
