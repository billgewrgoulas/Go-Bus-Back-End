import { Controller, Get, Header } from '@nestjs/common';
import { Param, Res } from '@nestjs/common/decorators/http/route-params.decorator';
import { LiveUpdatesService } from '../services/live.updates.service';
import { ArrivalDto } from '../transitDtos/arrival.dto';
import { Response } from 'express';
import {FeedEntity, VehicleDescriptor, VehiclePosition, Long, FeedHeader, FeedMessage, Position, TripDescriptor } from '../proto/position';
import Trip from '../proto/trips';
import { ScheduleService } from '../services/schedule.service';
import { DataService } from '../services/data.service';
import { Interval } from '@nestjs/schedule';
import { Stop } from '../entities/stop.entity';
import { LiveData } from '../entities/live.data';
var protobuf = require('protobufjs')


@Controller('live')
export class LiveUpdatesController {

    constructor(private liveService: LiveUpdatesService, private data: DataService){}

    @Get('/stops/:code')
    @Header('Content-Type', 'application/json')
    public async getDepartures(@Param('code') code: string): Promise<ArrivalDto[]>{
        return this.liveService.liveDataBuilder(code);
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

    // @Interval(30000)
    public async saveLiveData(): Promise<void>{

        const lineCodes: string[] = (await this.data.lines.getLines()).map(line => line.name);

        for (const line of lineCodes) {
            const buses: ArrivalDto[] = await this.getLineBuses(line);

            for (const bus of buses) {

                const stops: Stop[] = await this.data.stops.getRouteStops(bus.routeCode);
                const prom: Promise<any>[] = stops.map(stop => this.liveService.liveDataBuilder(stop.code));
                const res: any[] = await Promise.all(prom);
                const liveData: LiveData[] = [];
                
                for (let i = 0; i < stops.length; i++) {

                    for(let j = 0; j < res[i].length; j++){

                        const data: LiveData = {...res[i][j]};
                        data.stopCode = stops[i].code;
                        data.stopLat = stops[i].latitude;
                        data.stopLng = stops[i].longitude;
                        data.vehicleLat = res[i][j].latitude;
                        data.vehicleLng = res[i][j].longitude;

                        if(+data.vehicleLat > 0 && +data.vehicleLng > 0){
                            liveData.push(data);
                        }
                        
                    }
                }
                
                await this.data.live.insert(liveData);
            }
        }
    }
}

