import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IGenericRepository } from "./generic.repository";
import { RouteStop } from "src/transit/entities/routeStops.entity";

export class RouteStopRepository extends IGenericRepository<RouteStop>{

    constructor(
        @InjectRepository(RouteStop) rsRepo: Repository<RouteStop>,
    ){
        super(rsRepo);
    }

    public override async insert(data: RouteStop[]): Promise<void> {
        super.insert(data);
    }

}