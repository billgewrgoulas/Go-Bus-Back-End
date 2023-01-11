import { Injectable } from '@nestjs/common';
import { TripRepository } from 'src/repositories/trip.repository';
import { Trip } from '../entities/tripStatus';

@Injectable()
export class TripService {

    constructor(private repo: TripRepository) {}

    public async insertTrips(trips: Trip[]): Promise<void>{
        this.repo.insert(trips);
    }

    public getOne(trip_id: number){
        return this.repo.getOne(trip_id);
    }

    public updateEmbarkation(trip_id: number, stopCode: string, value: number){
        this.repo.updateEmbarkation(trip_id, stopCode, value);
    }

    public updateDebarkation(trip_id: number, stopCode: string, value: number){
        this.repo.updateDebarkation(trip_id, stopCode, value);
    }

    public async getByDate(routeCode: string, day: number, stopCode: string): Promise<Trip[]> {
       return this.repo.getByDate(routeCode, day, stopCode);
    }

}
