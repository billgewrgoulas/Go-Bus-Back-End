import { Injectable } from '@nestjs/common';
import { TripStatusRepository } from 'src/repositories/tripStatus.repository';
import { TripStatus } from '../entities/tripStatus';

@Injectable()
export class TripStatusService {

    constructor(private repo: TripStatusRepository) {}

    public insertDetails(trips: TripStatus[]): Promise<any>{
        return this.repo.insert(trips);
    }

    public getOne(trip_id: number): Promise<TripStatus| void>{
        return this.repo.getOne(trip_id);
    }

    public get(trip_ids: number[]): Promise<TripStatus[]>{
        return this.repo.get(trip_ids);
    }

}
