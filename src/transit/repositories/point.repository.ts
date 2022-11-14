import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Point } from "../entities/point.entity";
import { IGenericRepository } from "./generic.repository";

export class PointRepository extends IGenericRepository<Point>{

    public constructor(@InjectRepository(Point) pointRepo: Repository<Point>){
        super(pointRepo);
    }

    public override getAll(): Promise<Point[]> {
        return super.getAll();
    }

    public override get(routeCode: string): Promise<Point[]>{
        return super.get({routeCode: routeCode});
    }

}