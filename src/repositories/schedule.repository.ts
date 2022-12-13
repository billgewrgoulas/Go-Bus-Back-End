import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { Schedule } from "../transit/entities/schedule.entity";
import { IGenericRepository } from "./generic.repository";

export class ScheduleRepository extends IGenericRepository<Schedule>{

    public constructor(@InjectRepository(Schedule) scheduleRepo: Repository<Schedule>){
        super(scheduleRepo);
    }

    public override getAll(): Promise<Schedule[]> {
        return super.getAll();
    }

    public override get(routeCode: string): Promise<Schedule[]> {
        return super.get({routeCode: routeCode});
    }

    public override insert(data: Schedule[]): Promise<void | UpdateResult> {
        return super.insert(data);
    }

    public getTrip(day: number, routeCode: string, stopCode: string): Promise<Schedule[]>{
        return super.get({routeCode: routeCode, day: day, stopCode: stopCode});
    }

}