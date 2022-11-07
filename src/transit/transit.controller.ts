import { Controller, Get, Header } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { RouteInfo } from 'src/user/dto/route.dto';
import { ScheduleDetails } from 'src/user/dto/schedule.details';
import { Line } from './entities/line.entity';
import { Route } from './entities/route.entity';
import { Schedule } from './entities/schedule.entity';
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

    @Get('/stops')
    @Header('Content-Type', 'application/json')
    public async getStops(): Promise<Stop[]>{
        return this.transitService.getAllStops();
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

    @Get('/routeSchedules/:code')
    @Header('Content-Type', 'application/json')
    public async getRouteSchedule(@Param('code') code: string): Promise<ScheduleDetails>{
        const schedules: Schedule[] = await this.transitService.getDailyRouteSchedule(code);
        return new ScheduleDetails(schedules, code);
    }

    @Get('/filterStops/:code')
    @Header('Content-Type', 'application/json')
    public async getFilteredStops(@Param('code') code: string): Promise<Stop[]>{
        return  this.transitService.getStopsOfRouteStop(code);
    }

}
