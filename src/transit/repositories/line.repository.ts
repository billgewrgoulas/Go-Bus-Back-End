import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Line } from "../entities/line.entity";
import { IGenericRepository } from "./generic.repository";

@Injectable()
export class LineRepository extends IGenericRepository<Line>{

    public constructor(@InjectRepository(Line) lineRepo: Repository<Line>){
        super(lineRepo);
    }

    public override getAll(): Promise<Line[]> {
        return super.getAll();
    }
    
}