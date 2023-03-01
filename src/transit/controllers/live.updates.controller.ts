import { Controller, Get, Header } from '@nestjs/common';
import { Param, Res } from '@nestjs/common/decorators/http/route-params.decorator';
import { LiveUpdatesService } from '../services/live.updates.service';
import { ArrivalDto } from '../transitDtos/arrival.dto';
import { Response } from 'express';
import TripUpdates from '../proto/tripUpdates';
import { DataService } from '../services/data.service';
var protobuf = require('protobufjs');


@Controller('live')
export class LiveUpdatesController {

    private trips: TripUpdates;

    constructor(private liveService: LiveUpdatesService, private data: DataService){
        this.trips = new TripUpdates(this.data);
    }

    @Get('/stops/:code')
    @Header('Content-Type', 'application/json')
    public async getDepartures(@Param('code') code: string): Promise<ArrivalDto[]>{
        return this.liveService.liveDataBuilder(code);
    }

    @Get('/lines/:code')
    @Header('Content-Type', 'application/json')
    public async getLineBuses(@Param('code') code: string): Promise<ArrivalDto[]>{
        return this.liveService.busLocations(code);
    }

    @Get('/protobuf')
    @Header('Content-Type', 'application/protobuf')
    public async getProtobuf(@Res() response: Response): Promise<void> {
        
        const proto = await this.trips.tripUpdates();
        const root = await protobuf.load("./src/transit/proto/trips.proto");
        const testMessage = root.lookupType("tripspackage.FeedMessage");
        const message = testMessage.create(proto);
        const encoded = testMessage.encode(message).finish();

        response.send(encoded);
    }  
    
}

