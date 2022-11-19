import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Point } from "../entities/point.entity";
import { Route } from "../entities/route.entity";
import { IGenericRepository } from "./generic.repository";

export class RouteRepository extends IGenericRepository<Route>{

    public constructor(
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

    public async getRoutesBystops(start: string, end: string): Promise<Route[]>{
        return this.db.query(`
            SELECT *
            FROM transit_data.route as r
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