import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { NewSchedule } from "../entities/newSchedule.entity";


export class NewScheduleService{

    constructor(@InjectRepository(NewSchedule) private repo: Repository<NewSchedule>,){}

    public async insert(data: any[]): Promise<any> {
        return this.repo.save(data, {chunk: 1000}).catch(e => console.log(e));
    }

    public async getAll(): Promise<any>{
        return this.repo
            .createQueryBuilder()
            .select(['*'])
            .execute()
            .catch(e => console.log(e));
    }

}