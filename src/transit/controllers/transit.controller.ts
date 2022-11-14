import { Controller, Get, Header, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { Line } from '../entities/line.entity';
import { Point } from '../entities/point.entity';
import { Route } from '../entities/route.entity';
import { Schedule } from '../entities/schedule.entity';
import { Stop } from '../entities/stop.entity';
import { LineService } from '../services/line.service';
import { PointService } from '../services/points.service';
import { RouteService } from '../services/routes.service';
import { ScheduleService } from '../services/schedule.service';
import { StopService } from '../services/stop.service';
import { RouteInfoDto } from '../transitDtos/route.dto';
import { ScheduleDetailsDto } from '../transitDtos/schedule.details';

@Controller('transitAPI')
export class TransitController {

    constructor(
		private lines: LineService,
		private routes: RouteService, 
		private points: PointService,
		private stops: StopService,
		private schedules: ScheduleService
	){}

    @Get('/lines')
    @Header('Content-Type', 'application/json')
    public async getLines(): Promise<Line[]>{
        return this.lines.getLines();
    }

    @Get('/stops')
    @Header('Content-Type', 'application/json')
    public async getStops(): Promise<Stop[]>{
        return this.stops.getStops();
    }

    @Get('/lineRoutes/:id')
    @Header('Content-Type', 'application/json')
    public async getLineRoutes(@Param('id') id: string): Promise<Route[]>{
        return this.routes.getLineRoutes(id);
    }

    @Get('/routeInfo/:code')
    @Header('Content-Type', 'application/json')
    public async getRouteStops(@Param('code') code: string): Promise<RouteInfoDto>{

        const stops: Stop[] = await this.stops.getRouteStops(code);
        const points: Point[] = await this.points.getRoutePoints(code);

        return new RouteInfoDto(stops, points, code);
    }

    @Get('/routeSchedules/:code')
    @Header('Content-Type', 'application/json')
    public async getRouteSchedule(@Param('code') code: string): Promise<ScheduleDetailsDto>{

        const schedules: Schedule[] = await this.schedules.getRouteSchedules(code);

        return new ScheduleDetailsDto(schedules, code);
    }

    // @Get('/filterStops/:code')
    // @Header('Content-Type', 'application/json')
    // public async getFilteredStops(@Param('code') code: string): Promise<Stop[]>{
    //     return  this.transitService.getStopsOfRouteStop(code);
    // }

    // @Post('/getTrips')
    // @Header('Content-Type', 'application/json')
    // public async getTrips(@Body() data: any){
    //     return this.transitService.calculateTrip(data.start, data.end);
    // }

}
