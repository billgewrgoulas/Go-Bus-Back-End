import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Line } from "../transit/entities/line.entity";
import { IGenericRepository } from "./generic.repository";
import { LiveData } from "src/transit/entities/live.data";

@Injectable()
export class LiveDataRepository extends IGenericRepository<LiveData>{

    constructor(@InjectRepository(LiveData) repo: Repository<LiveData>){
        super(repo);
    }

    public override async insert(data: LiveData[]): Promise<void>{
        super.insert(data);
    }
    
}