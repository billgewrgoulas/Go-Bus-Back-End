import { Injectable } from '@nestjs/common';
import { Schedule } from '../entities/schedule.entity';
import { ScheduleRepository } from '../../repositories/schedule.repository';
import { Plan } from '../transitDtos/itinerary.dto';
import { Booking } from 'src/user/entities/booking.entity';

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

    public getByTime(day: number, route: string, s: number, e: number): Promise<Schedule[]>{
        return this.repo.getByTime(s, e, day, route);
    }

}
