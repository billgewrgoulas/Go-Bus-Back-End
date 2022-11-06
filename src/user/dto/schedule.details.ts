import { Schedule } from "src/transit/entities/schedule.entity";

export class ScheduleDetails{

    public schedules: Schedule[];
    public routeCode: string;

    public constructor(sch: Schedule[], code: string){
        this.schedules = sch;
        this.routeCode = code;
    }
    
}