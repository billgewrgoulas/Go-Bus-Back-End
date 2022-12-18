import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Point } from "../transit/entities/point.entity";
import { Route } from "../transit/entities/route.entity";
import { IGenericRepository } from "./generic.repository";

export class RouteRepository extends IGenericRepository<Route>{

    constructor(
        @InjectRepository(Route) routeRepo: Repository<Route>,
        @InjectDataSource() dataSource: DataSource
    ){
        super(routeRepo, dataSource);
    }

    public override async getAll(): Promise<Route[]> {
        return super.getAll();
    }

    public async getRoutesByLineId(lineId: string): Promise<Route[]>{
        return super.get({lineId: lineId});
    }

    public async getStopRoutes(stopCode: string): Promise<Route[]>{
        return this.db.query(`
            SELECT r."code", r."lineId", r."direction", r."desc", r."desc_eng", r."stopCodes", l."name"
            FROM transit_data.route AS r
            INNER JOIN transit_data.line AS l
            ON r."lineId"=l."id"
            WHERE r."code" IN(
                SELECT DISTINCT "routeCode"
                FROM transit_data.route_stop AS rs
                WHERE rs."stopCode"='${stopCode}'
            );
        `).catch(e => console.log(e));
    }

    public async getRoutesBystops(start: string, end: string): Promise<Route[]>{
        return this.db.query(`
            SELECT *
            FROM transit_data.route AS r
            WHERE r."code" IN(
                SELECT DISTINCT "routeCode"
                FROM transit_data.route_stop AS rs
                WHERE rs."stopCode"='${start}'
                INTERSECT
                SELECT DISTINCT "routeCode"
                FROM transit_data.route_stop AS rs
                WHERE rs."stopCode"='${end}'
            );
        `).catch(e => console.log(e));
    }


}