import { Controller, Get, Header } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { OasaService } from 'src/oasa/oasa.service';
import { LineDto } from 'src/user/dto/line.dto';
import { PointDto } from 'src/user/dto/point.dto';
import { RouteDto, RouteInfo } from 'src/user/dto/route.dto';
import { StopDto } from 'src/user/dto/stop.dto';
import { Line } from './entities/line.entity';
import { Point } from './entities/point.entity';
import { Route } from './entities/route.entity';

import { Stop } from './entities/stop.entity';
import { TransitService } from './transit.service';

@Controller('transitAPI')
export class TransitController {

    constructor(private transitService: TransitService){}

    @Get('/lines')
    @Header('Content-Type', 'application/json')
    public async getLines(): Promise<Line[]>{
        return this.transitService.getLines();
    }

    @Get('/lineRoutes/:id')
    @Header('Content-Type', 'application/json')
    public async getLineRoutes(@Param('id') id: string): Promise<Route[]>{
        return this.transitService.getLineRoutes(id);
    }

    @Get('/routeInfo/:code')
    @Header('Content-Type', 'application/json')
    public async getRouteStops(@Param('code') code: string): Promise<RouteInfo>{
        return this.transitService.getRouteStopsAndPoints(code);
    }

}
