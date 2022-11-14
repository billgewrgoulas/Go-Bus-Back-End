import { Controller, Get, Header } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { LiveUpdatesService } from '../services/live.updates.service';
import { ArrivalDto } from '../transitDtos/arrival.dto';

@Controller('live')
export class LiveUpdatesController {

    constructor(private liveService: LiveUpdatesService){}

    @Get('/stops/:code')
    @Header('Content-Type', 'application/json')
    public async getDepartures(@Param('code') code: string): Promise<ArrivalDto[]>{

        const arrivalsPromise = <any>await this.liveService.getLiveData(code, 'stops/live/');
        const arrivals: ArrivalDto[] = [];

        if(arrivalsPromise && arrivalsPromise.data.vehicles){
            for(const e of arrivalsPromise.data.vehicles){
                const arrival = new ArrivalDto(e);
                arrivals.push(arrival);
            }
        }
        
        return arrivals;
    }

    @Get('/lines/:code')
    @Header('Content-Type', 'application/json')
    public async getLineBuses(@Param('code') code: string): Promise<ArrivalDto[]>{

        const arrivalsPromise = <any>await this.liveService.getLiveData(code, 'lines/live/');
        const arrivals: ArrivalDto[] = [];

        if(arrivalsPromise && arrivalsPromise.data){
            for (const e of arrivalsPromise.data) {
                const arrival = new ArrivalDto(e);
                arrivals.push(arrival);
            }
        }   
        
        return arrivals;
    }

}
