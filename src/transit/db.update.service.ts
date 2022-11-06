import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Line } from './entities/line.entity';
import { Point } from './entities/point.entity';
import { Route } from './entities/route.entity';
import { RouteStop } from './entities/routeStops.entity';
import { Schedule } from './entities/schedule.entity';
import { Stop } from './entities/stop.entity';

@Injectable()
export class DBUpdateService {

    constructor(@InjectRepository(Line) private lineRepo: Repository<Line>,
                @InjectRepository(Route) private routeRepo: Repository<Route>,
                @InjectRepository(Point) private pointRepo: Repository<Point>,
                @InjectRepository(Stop) private stopRepo: Repository<Stop>,
                @InjectRepository(RouteStop) private rsRepo: Repository<RouteStop>,
                @InjectRepository(Schedule) private schRepo: Repository<Schedule>) {}

    public async populateLines(line: Line, routes: Route[]){
        await this.lineRepo.save(line, {chunk: 50}).catch(e => console.log(e.detail));
        await this.routeRepo.save(routes, {chunk: 50}).catch(e => console.log(e.detail));
    }

    public async getRoutes(){
        return await this.routeRepo.find();
    }

    public async populateStopsAndPoints(code: string, stops: string[]){
        await this.routeRepo
            .createQueryBuilder()
            .update()
            .set({stopCodes: stops})
            .where({code: code})
            .execute()
            .catch(e => e.detail);
    }

    public async findRoute(code: string){
        return await this.routeRepo.findOne({where: {code: code}});
    }

    public async saveRouteStop(rs: RouteStop[]){
        await this.rsRepo.save(rs, {chunk: 100}).catch(e => console.log(e));
    }

    public async saveSchedule(sc: Schedule[]){
        await this.schRepo.save(sc, {chunk: 100}).catch(e => console.log(e.detail));
    }



}
