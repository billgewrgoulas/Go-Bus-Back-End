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


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Line, 
            Route, 
            Point,
            Stop,
            RouteStop
        ]), 
        OasaModule
    ],
    providers: [TransitService, DBUpdateService],
    controllers: [TransitController, DBupdateController]
})
export class TransitModule {}
