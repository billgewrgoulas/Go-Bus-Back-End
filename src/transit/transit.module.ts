import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Line } from './entities/line.entity';
import { Point } from './entities/point.entity';
import { Route } from './entities/route.entity';
import { Stop } from './entities/stop.entity';
import { TransitService } from './transit.service';
import { TransitController } from './transit.controller';
import { OasaModule } from 'src/oasa/oasa.module';
import { RouteStop } from './entities/routeStops.entity';
import { DBUpdateService } from './db.update.service';
import { DBupdateController } from './db.update.controller';
import { LiveUpdatesService } from './live.updates.service';
import { LiveUpdatesController } from './live.updates.controller';
import { HttpModule } from '@nestjs/axios';
import { Schedule } from './entities/schedule.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Line, 
            Route, 
            Point,
            Stop,
            RouteStop,
            Schedule
        ]), 
        OasaModule,
        HttpModule
    ],
    providers: [TransitService, DBUpdateService, LiveUpdatesService],
    controllers: [TransitController, DBupdateController, LiveUpdatesController]
})
export class TransitModule {}
