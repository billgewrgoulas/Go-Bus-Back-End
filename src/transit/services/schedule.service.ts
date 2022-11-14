import { Injectable } from '@nestjs/common';
import { Schedule } from '../entities/schedule.entity';
import { ScheduleRepository } from '../repositories/schedule.repository';

@Injectable()
export class ScheduleService {

    constructor(private repo: ScheduleRepository) {}

    public async getRouteSchedules(routeCode: string): Promise<Schedule[]>{
        return this.repo.get(routeCode);
    }

}
