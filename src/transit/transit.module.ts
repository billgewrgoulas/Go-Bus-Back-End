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
import { LineRepository } from '../repositories/line.repository';
import { RouteRepository } from '../repositories/route.repository';
import { PointRepository } from '../repositories/point.repository';
import { ScheduleRepository } from '../repositories/schedule.repository';
import { StopRepository } from '../repositories/stop.repository';
import { Context } from './Navigator/context';
import { DataService } from './services/data.service';
import { Booking, Trip, TripStatus } from './entities/tripStatus';
import { BookingRepository } from 'src/repositories/booking.repository';
import { BookingService } from './services/booking.service';
import { TripRepository } from 'src/repositories/trip.repository';
import { TripService } from './services/trip.service';
import { TripStatusService } from './services/tripStatus.service';
import { TripStatusRepository } from 'src/repositories/tripStatus.repository';


@Module({
    imports: [
        TypeOrmModule.forFeature([Line, Route, Point, Stop, RouteStop, Schedule, Trip, Booking, TripStatus]), 
        HttpModule
    ],
    providers: [
        DBUpdateService, LiveUpdatesService, LineService, RouteService, DataService,
        PointService, ScheduleService, StopService, Context, BookingRepository, BookingService, 
        TripRepository, TripService, TripStatusService, TripStatusRepository,
        LineRepository, RouteRepository, PointRepository, ScheduleRepository, StopRepository
    ],
    controllers: [TransitController, DBupdateController, LiveUpdatesController],
    exports: [DataService]
})
export class TransitModule {}
