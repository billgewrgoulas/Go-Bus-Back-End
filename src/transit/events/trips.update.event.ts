import { TripRepository } from 'src/repositories/trip.repository';
import { DataService } from '../services/data.service';
import { Booking } from 'src/user/entities/booking.entity';

export class UpdateTrips{

    constructor(
        private bookings: Booking[], 
        private data: DataService, 
        private value: number
    ){}

    public get getBookings(): Booking[]{
        return this.bookings;
    }

    public get repo(): DataService{
        return this.data;
    }

    public get getValue(): number{
        return this.value;
    }

}