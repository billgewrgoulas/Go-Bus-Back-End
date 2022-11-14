import { Schedule } from "src/transit/entities/schedule.entity";

export class ScheduleDetailsDto{

    private schedules: Schedule[];
    private routeCode: string;

    public constructor(sch: Schedule[], code: string){
        this.schedules = sch;
        this.routeCode = code;
    }
    
}