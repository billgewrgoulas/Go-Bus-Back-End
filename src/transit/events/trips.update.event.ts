import { TripRepository } from 'src/repositories/trip.repository';
import { Booking } from '../entities/tripStatus';
import { RouteRepository } from 'src/repositories/route.repository';

export class UpdateTrips{

    constructor(
        private bookings: Booking[], 
        private tripRepo: TripRepository, 
        private value: number
    ){}

    public get getBookings(): Booking[]{
        return this.bookings;
    }

    public get repo(): TripRepository{
        return this.tripRepo;
    }

    public get getValue(): number{
        return this.value;
    }

}