import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Line } from "../transit/entities/line.entity";
import { IGenericRepository } from "./generic.repository";

@Injectable()
export class LineRepository extends IGenericRepository<Line>{

    constructor(
        @InjectRepository(Line) lineRepo: Repository<Line>, 
        @InjectDataSource() db: DataSource
    ){
        super(lineRepo);
    }

    public override getAll(): Promise<Line[]> {
        return super.getAll();
    }

    public override async insert(lines: Line[]): Promise<void>{
        super.insert(lines);
    }
    
}