import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Arrival } from 'src/user/dto/arrival.dto';
import { RouteDto, RouteInfo } from 'src/user/dto/route.dto';
import { Code, DataSource, Repository } from 'typeorm';
import { Line } from './entities/line.entity';
import { Point } from './entities/point.entity';
import { Route } from './entities/route.entity';
import { Schedule } from './entities/schedule.entity';
import { Stop } from './entities/stop.entity';

@Injectable()
export class TransitService {

    constructor(@InjectRepository(Line) private lineRepo: Repository<Line>,
                @InjectRepository(Route) private routeRepo: Repository<Route>,
                @InjectRepository(Point) private pointRepo: Repository<Point>,
                @InjectRepository(Stop) private stopRepo: Repository<Stop>,
                @InjectRepository(Schedule) private schRepo: Repository<Schedule>,
                @InjectDataSource() private dataSource: DataSource) {}

    public async getLines(): Promise<Line[]>{
        return await this.lineRepo
            .createQueryBuilder()
            .select(['*'])
            .execute()
            .catch(e => console.log(e));
    }

    public async getLineRoutes(lineId: string): Promise<Route[]>{
        return await this.routeRepo
            .createQueryBuilder()
            .select(['*'])
            .where({lineId: lineId})
            .execute()
            .catch(e => console.log(e));
    }

    public async getRouteStops(code: string): Promise<Stop[]>{
        return await this.dataSource.query(`
            SELECT "desc", "desc_eng", "code", "latitude", "longitude"
            FROM transit_data.route_stop as rs
            INNER JOIN transit_data.stop as s ON s."code"=rs."stopCode"
            WHERE rs."routeCode"='${code}';
        `);
    }

    public async getRouteStopsAndPoints(code: string): Promise<RouteInfo>{

        const points: Point[] = await this.pointRepo
            .createQueryBuilder()
            .select(['*'])
            .where({routeCode: code})
            .execute()
            .catch(e => console.log(e));

        const stops: Stop[] = await this.getRouteStops(code);

        return {stops: stops, points: points, code: code};
    }

    public async getDailyRouteSchedule(code: string): Promise<Schedule[]>{
        return await this.schRepo
            .createQueryBuilder()
            .select(['*'])
            .where({routeCode: code})
            .execute()
            .catch(e => console.log(e.detail));
    }

    public async getAllStops(): Promise<Stop[]>{
        return await this.stopRepo
            .createQueryBuilder()
            .select(['*'])
            .execute()
            .catch(e => console.log(e));
    }

    public async getSubPath(routeCode: string, bus: Arrival, stop: Stop){

        const points: Point[] = await this.pointRepo
            .createQueryBuilder()
            .select(['*'])
            .where({routeCode: routeCode})
            .execute()
            .catch(e => console.log(e));

        
    }

    private dist(p1: Point, p2: Arrival){
        return Math.sqrt(Math.pow(+p1.latitude - +p2.latitude, 2) + Math.pow(+p1.longitude - +p2.longitude, 2)); 
    }

        

}
