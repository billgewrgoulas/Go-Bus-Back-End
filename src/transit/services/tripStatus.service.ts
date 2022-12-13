import { Injectable } from '@nestjs/common';
import { TripRepository } from 'src/repositories/trip.repository';
import { TripStatusRepository } from 'src/repositories/tripStatus.repository';
import { Trip, TripStatus } from '../entities/tripStatus';

@Injectable()
export class TripStatusService {

    constructor(private repo: TripStatusRepository) {}

    public insertDetails(trips: TripStatus[]): Promise<any>{
        return this.repo.insert(trips);
    }

    public get(trip_id: number): Promise<TripStatus| void>{
        return this.repo.getOne(trip_id);
    }

}
