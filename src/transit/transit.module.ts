import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Line } from './entities/line.entity';
import { Point } from './entities/point.entity';
import { Route } from './entities/route.entity';
import { Stop } from './entities/stop.entity';
import { TransitController } from './controllers/transit.controller';
import { RouteStop } from './entities/routeStops.entity';
import { DBUpdateService } from './services/db.update.service';
import { LiveUpdatesService } from './services/live.updates.service';
import { LiveUpdatesController } from './controllers/live.updates.controller';
import { HttpModule } from '@nestjs/axios';
import { Schedule } from './entities/schedule.entity';
import { LineService } from './services/line.service';
import { RouteService } from './services/routes.service';
import { PointService } from './services/points.service';
import { ScheduleService } from './services/schedule.service';
import { StopService } from './services/stop.service';
import { LineRepository } from '../repositories/line.repository';
import { RouteRepository } from '../repositories/route.repository';
import { PointRepository } from '../repositories/point.repository';
import { ScheduleRepository } from '../repositories/schedule.repository';
import { StopRepository } from '../repositories/stop.repository';
import { Context } from './Navigator/context';
import { DataService } from './services/data.service';
import { Trip } from './entities/trip.entity';
import { TripRepository } from 'src/repositories/trip.repository';
import { TripService } from './services/trip.service';
import { OTPService } from './services/otp.service';
import { TripUpdatesListener } from './listeners/trips.update.listener';
import { TransitGateWay } from 'src/socketsIO/transit.gateway';
import { RouteStopRepository } from 'src/repositories/routeStop.repository';
import { RouteStopService } from './services/routeStop.service';
import { NewSchedule } from './entities/newSchedule.entity';
import { NewScheduleService } from './services/newSchedule.service';
import { LiveData } from './entities/live.data';
import { LiveDataRepository } from 'src/repositories/liveData.repository';
import { ScheduleDayDto } from './transitDtos/scheduleDays.dto';
import { Scheduler } from './controllers/db.update.controller';



@Module({
    imports: [
        TypeOrmModule.forFeature([NewSchedule, Line, Route, Point, Stop, RouteStop, Schedule, Trip, LiveData]), 
        HttpModule
    ],
    providers: [
        DBUpdateService, LiveUpdatesService, LineService, RouteService, DataService, OTPService,
        PointService, ScheduleService, StopService, RouteStopRepository, RouteStopService,
        TripRepository, TripService, LineRepository, RouteRepository, PointRepository, ScheduleRepository, StopRepository,
        TripUpdatesListener, TransitGateWay, NewScheduleService, LiveDataRepository
    ],
    controllers: [TransitController, LiveUpdatesController, Scheduler],
    exports: [DataService]
})
export class TransitModule {}
