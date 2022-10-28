import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { RouteDto, RouteInfo } from 'src/user/dto/route.dto';
import { DataSource, Repository } from 'typeorm';
import { Line } from './entities/line.entity';
import { Point } from './entities/point.entity';
import { Route } from './entities/route.entity';
import { Stop } from './entities/stop.entity';

@Injectable()
export class TransitService {

    constructor(@InjectRepository(Line) private lineRepo: Repository<Line>,
                @InjectRepository(Route) private routeRepo: Repository<Route>,
                @InjectRepository(Point) private pointRepo: Repository<Point>,
                @InjectRepository(Stop) private stopRepo: Repository<Stop>,
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

    public async getRouteStopsAndPoints(code: string): Promise<RouteInfo>{

        const route: Route | void = await this.routeRepo
            .findOne({where:{code: code}})
            .catch(e => console.log(e.detail));

        if(route){

            const points: Point[] = await this.pointRepo
                .createQueryBuilder()
                .select(['*'])
                .where({routeCode: code})
                .execute()
                .catch(e => console.log(e));

            const stops: Stop[] = await this.dataSource.query(`
                SELECT "desc", "desc_eng", "code", "latitude", "longitude"
                FROM transit_data.route_stop as rs
                INNER JOIN transit_data.stop as s ON s."code"=rs."stopCode"
                WHERE rs."routeCode"='${code}';
            `);

            return {stops: stops, points: points};
        }

        return {stops: [], points: []};
    }


}
