import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Point } from "../entities/point.entity";
import { Route } from "../entities/route.entity";
import { IGenericRepository } from "./generic.repository";

export class RouteRepository extends IGenericRepository<Route>{

    public constructor(@InjectRepository(Route) routeRepo: Repository<Route>){
        super(routeRepo);
    }

    public override async getAll(): Promise<Route[]> {
        return super.getAll();
    }

    public async getRoutesByLineId(lineId: string): Promise<Route[]>{
        return super.get({lineId: lineId});
    }

}