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

        const resolve = await Promise.all([
            this.stops.getRouteStops(code),
            this.points.getRoutePoints(code)
        ]);

        return new RouteInfoDto(resolve[0], resolve[1], code);
    }

    @Get('/routeSchedules/:code')
    @Header('Content-Type', 'application/json')
    public async getRouteSchedule(@Param('code') code: string): Promise<ScheduleDetailsDto>{

        const schedules: Schedule[] = await this.schedules.getRouteSchedules(code);

        return new ScheduleDetailsDto(schedules, code);
    }

    @Post('/getPaths')
    @Header('Content-Type', 'application/json')
    public async getTrips(@Body() data: any): Promise<Route[]>{
        return this.routes.getCustomPath(data.data);
    }

}
