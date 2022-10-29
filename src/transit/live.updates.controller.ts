import { Controller, Get, Header } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { Arrival } from 'src/user/dto/arrival.dto';
import { LiveUpdatesService } from './live.updates.service';

@Controller('live')
export class LiveUpdatesController {

    constructor(private liveService: LiveUpdatesService){}

    @Get('/stops/:code')
    @Header('Content-Type', 'application/json')
    public async getLines(@Param('code') code: string): Promise<Arrival[]>{

        const arrivalsPromise = <any>await this.liveService.getStopArrivals(code);
        const arrivals: Arrival[] = [];

        if(arrivalsPromise && arrivalsPromise.data.vehicles){
            arrivalsPromise.data.vehicles.forEach((e: any) => {
                const arrival = new Arrival(e, code);
                arrivals.push(arrival);
            });
        }
        
        return arrivals;
    }


}
