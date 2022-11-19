import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Line } from './entities/line.entity';
import { Point } from './entities/point.entity';
import { Route } from './entities/route.entity';
import { Stop } from './entities/stop.entity';
import { TransitController } from './controllers/transit.controller';
import { RouteStop } from './entities/routeStops.entity';
import { DBUpdateService } from './services/db.update.service';
import { DBupdateController } from './controllers/db.update.controller';
import { LiveUpdatesService } from './services/live.updates.service';
import { LiveUpdatesController } from './controllers/live.updates.controller';
import { HttpModule } from '@nestjs/axios';
import { Schedule } from './entities/schedule.entity';
import { LineService } from './services/line.service';
import { RouteService } from './services/routes.service';
import { PointService } from './services/points.service';
import { ScheduleService } from './services/schedule.service';
import { StopService } from './services/stop.service';
import { Repository } from 'typeorm';
import { IGenericRepository } from './repositories/generic.repository';
import { LineRepository } from './repositories/line.repository';
import { RouteRepository } from './repositories/route.repository';
import { PointRepository } from './repositories/point.repository';
import { ScheduleRepository } from './repositories/schedule.repository';
import { StopRepository } from './repositories/stop.repository';
import { Context } from './Navigator/context';


@Module({
    imports: [
        TypeOrmModule.forFeature([Line, Route, Point, Stop, RouteStop, Schedule]), 
        HttpModule
    ],
    providers: [
        DBUpdateService, LiveUpdatesService, LineService, RouteService,
        PointService, ScheduleService, StopService, Context,
        LineRepository, RouteRepository, PointRepository, ScheduleRepository, StopRepository
    ],
    controllers: [TransitController, DBupdateController, LiveUpdatesController]
})
export class TransitModule {}
