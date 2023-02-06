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

    private trips: Trip;

    constructor(private liveService: LiveUpdatesService, private data: DataService){
        this.trips = new Trip(this.data);
    }

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

    @Get('/protobuf')
    @Header('Content-Type', 'application/protobuf')
    public async getProtobuf(@Res() response: Response): Promise<void> {
        
        const proto = await this.trips.updateContructor();
        const root = await protobuf.load("./src/transit/proto/trips.proto");
        const testMessage = root.lookupType("tripspackage.FeedMessage");
        const message = testMessage.create(proto);
        const encoded = testMessage.encode(message).finish();

        response.send(encoded);
    }  
    
}

