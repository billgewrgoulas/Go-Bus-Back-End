import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Schedule } from "../transit/entities/schedule.entity";
import { IGenericRepository } from "./generic.repository";

export class ScheduleRepository extends IGenericRepository<Schedule>{

    public constructor(
        @InjectRepository(Schedule) scheduleRepo: Repository<Schedule>,
        @InjectDataSource() db: DataSource
    ){
        super(scheduleRepo, db);
    }

    public override getAll(): Promise<Schedule[]> {
        return super.getAll();
    }

    public override get(routeCode: string): Promise<Schedule[]> {
        return super.get({routeCode: routeCode});
    }

    public async getIds(): Promise<any[]> {
        return this.db.query(`
            SELECT DISTINCT trip_id
            FROM transit_data.schedule
            ORDER BY s."id" ASC;
        `).catch(e => console.log(e));
    }

    public async getTripOne(id: number): Promise<Schedule[]> {
        return this.db.query(`
            SELECT *
            FROM transit_data.schedule as s
            WHERE s."trip_id"='${id}'
            ORDER BY s."id" ASC;
        `).catch(e => console.log(e));
    }

    public async getByTime(s: number, e: number, day: number, route: string): Promise<Schedule[]>{
        return this.db.query(`
            SELECT *
            FROM transit_data.schedule AS s
            WHERE s."routeCode"='${route}' AND s."day"='${day}' AND s."tripTimeHour" > '${s}' AND s."tripTimeHour" < '${e}';
        `).catch(e => console.log(e));
    }

    public override insert(data: Schedule[]): Promise<void | UpdateResult> {
        return super.insert(data);
    }

    public getTrip(day: number, routeCode: string, stopCode: string): Promise<Schedule[]>{
        return super.get({routeCode: routeCode, day: day, stopCode: stopCode});
    }

}