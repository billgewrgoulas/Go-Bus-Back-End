import { Injectable } from '@nestjs/common';
import { TripRepository } from 'src/repositories/trip.repository';
import { Trip } from '../entities/trip.entity';

@Injectable()
export class TripService {

    constructor(private repo: TripRepository) {}

    public async insertTrips(trips: Trip[]): Promise<void>{
        this.repo.insert(trips);
    }

    public getOne(trip_id: number): Promise<Trip[]>{
        return this.repo.getTrip(trip_id);
    }

    public updateEmbarkation(trip_id: number, stopCode: string, value: number): Promise<any>{
        return this.repo.updateEmbarkation(trip_id, stopCode, value);
    }

    public updateDebarkation(trip_id: number, stopCode: string, value: number): Promise<any>{
        return this.repo.updateDebarkation(trip_id, stopCode, value);
    }

    public async getByDate(routeCode: string, day: number, stopCode: string): Promise<Trip[]> {
       return this.repo.getByDate(routeCode, day, stopCode);
    }

    public async getOccupation(trip_ids: number[], stopCodes: string[]): Promise<Trip[]>{
        return this.repo.getOccupation(trip_ids, stopCodes);
    }

    public async getMaxOccupation(stops: string[], trip_id: number): Promise<Trip[]>{
        return this.repo.getMaxOccupation(stops, trip_id);
    }

    public async updateOccupation(stopCodes: string[], value: number, trip_id: number): Promise<void>{
        this.repo.updateOccupation(stopCodes, value, trip_id);
    }

    public async get(trip_id: number): Promise<Trip[]>{
        return this.repo.get(trip_id);
    }

}
