import { Controller, Get, Header } from '@nestjs/common';
import { Param, Res } from '@nestjs/common/decorators/http/route-params.decorator';
import { LiveUpdatesService } from '../services/live.updates.service';
import { ArrivalDto } from '../transitDtos/arrival.dto';
import { Response } from 'express';
import {FeedEntity, VehicleDescriptor, VehiclePosition, Long, FeedHeader, FeedMessage, Position, TripDescriptor } from '../proto/position';
import Trip from '../proto/trips';
import { ScheduleService } from '../services/schedule.service';
import { DataService } from '../services/data.service';
var protobuf = require('protobufjs')


@Controller('live')
export class LiveUpdatesController {

    private tripUpdates: Trip;

    private header: FeedHeader = {
        gtfsRealtimeVersion: '2.0',
        incrimentality: 0,
        timestamp: 1
    }

    private position: Position = {
        latitude: 1, 
        longitude: 2
    }

    private trip: TripDescriptor = {
        tripId: '1',
        startDate: '2',
        routeId: '3',
        directionId: 4
    }

    private timestamp: Long = {
        low: 1, 
        high: 2, 
        unsigned: false
    }

    private vehicled: VehicleDescriptor = {
        id: '2',
        label: '4'
    }

    private vehicle: VehiclePosition = {
        currentStopSequence: 1,
        stopId: '2',
        occupancyStatus: 3,
        trip: this.trip,
        position: this.position,
        timestamp: this.timestamp,
        vehicle: this.vehicled
    }

    private entity: FeedEntity = {
        id: '1',
        vehicle: this.vehicle
    }

    private message: FeedMessage = {
        header: this.header,
        entity: [this.entity]
    }

    constructor(private liveService: LiveUpdatesService, private data: DataService){
        this.tripUpdates = new Trip(this.liveService, data);
    }

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

    @Get('/trips')
    @Header('Content-Type', 'application/protobuf')
    public async getStaticFile(@Res() response: Response): Promise<void> {
        
        const root = await protobuf.load("./src/transit/proto/trips.proto");
        const testMessage = root.lookupType("tripspackage.FeedMessage");
        const message = testMessage.create(this.tripUpdates.getMessage);
        const encoded = testMessage.encode(message).finish();

        response.send(encoded);
    }  
}

