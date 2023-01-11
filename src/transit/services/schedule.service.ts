import { Injectable } from '@nestjs/common';
import { Schedule } from '../entities/schedule.entity';
import { ScheduleRepository } from '../../repositories/schedule.repository';

@Injectable()
export class ScheduleService {

    constructor(private repo: ScheduleRepository) {}

    public getRouteSchedules(routeCode: string): Promise<Schedule[]>{
        return this.repo.get(routeCode);
    }

    public insertTrips(trips: Schedule[]): Promise<any>{
        return this.repo.insert(trips);
    }

    public async getIds(): Promise<any[]>{
        return this.repo.getIds();
    }

    public async getTripOne(id: number): Promise<Schedule[]>{
        return this.repo.getTripOne(id);
    }

    public getTrips(routeCode: string, day: number, stopCode: string): Promise<Schedule[]>{
        return this.repo.getTrip(day, routeCode, stopCode);
    }

    public getAll(): Promise<Schedule[]>{
        return this.repo.getAll();
    }

}
