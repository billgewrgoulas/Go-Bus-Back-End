import { Controller, Get, Header, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { Line } from '../entities/line.entity';
import { Route } from '../entities/route.entity';
import { Schedule } from '../entities/schedule.entity';
import { Stop } from '../entities/stop.entity';
import { DataService } from '../services/data.service';
import { Plan } from '../transitDtos/itinerary.dto';
import { RouteInfoDto } from '../transitDtos/route.dto';
import { ScheduleDetailsDto } from '../transitDtos/schedule.details';
import { Point } from '../entities/point.entity';

@Controller('transitAPI')
export class TransitController {

    constructor(private data: DataService){}

    @Get('/lines')
    @Header('Content-Type', 'application/json')
    public getLines(): Promise<Line[]>{
        return this.data.lines.getLines();
    }

    @Get('/stops')
    @Header('Content-Type', 'application/json')
    public getStops(): Promise<Stop[]>{
        return this.data.stops.getStops();
    }

    @Get('/routes')
    @Header('Content-Type', 'application/json')
    public getRoutes(): Promise<Route[]>{
        return this.data.routes.getRoutes();
    }

    @Get('/lineRoutes/:id')
    @Header('Content-Type', 'application/json')
    public getLineRoutes(@Param('id') id: string): Promise<Route[]>{
        return this.data.routes.getLineRoutes(id);
    }

    @Get('/routeInfo/:code')
    @Header('Content-Type', 'application/json')
    public async getRouteStops(@Param('code') code: string): Promise<RouteInfoDto>{
        const points: Point[] = await this.data.points.getRoutePoints(code)        
        return new RouteInfoDto([], points, code);
    }

    @Get('/routeSchedules/:code')
    @Header('Content-Type', 'application/json')
    public async getRouteSchedule(@Param('code') code: string): Promise<ScheduleDetailsDto>{
        const schedules: Schedule[] = await this.data.schedule.getRouteSchedules(code);
        return new ScheduleDetailsDto(schedules, code);
    }

    @Get('/routeAndStops')
    @Header('Content-Type', 'application/json')
    public async getRoutesAndStops(): Promise<{routes: Route[], stops: Stop[]}>{
        
        const promise: [Route[], Stop[]] = await Promise.all([
            this.data.routes.getRoutes(),
            this.data.stops.getStops()
        ]);

        return {routes: promise[0], stops: promise[1]};
    }

    @Post('/getPaths')
    @Header('Content-Type', 'application/json')
    public getTrips(@Body() data: any): Promise<Plan>{
        return this.data.otp.getPlan(data.data);
    }

    @Get('/stopRoutes/:code')
    @Header('Content-Type', 'application/json')
    public getStopRoutes(@Param('code') code: string): Promise<string[]>{
        return this.data.routes.getStopRoutes(code);
    }

}
