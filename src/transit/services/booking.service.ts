import { Injectable } from '@nestjs/common';
import { BookingRepository } from 'src/repositories/booking.repository';
import { TripRepository } from 'src/repositories/trip.repository';
import { TripStatusRepository } from 'src/repositories/tripStatus.repository';
import { Booking, Trip, TripStatus } from '../entities/tripStatus';
import { DataService } from './data.service';

@Injectable()
export class BookingService {

    constructor(
        private repo: BookingRepository, 
        private tripRepo: TripRepository,
        private tripStatus: TripStatusRepository
    ) {}

    public async getBookings(email: string): Promise<Booking[]>{
        return this.repo.get(email);
    }

    public async insertBooking(bookings: Booking[]): Promise<any>{

        let msg = {status: true};

        for (const booking of bookings) {

            const tripStatus: Trip | void = await this.tripRepo.getStatus(booking.trip_id, booking.startStop);

            if(tripStatus){
                const totalOnBoard: number = tripStatus.occupied + tripStatus.embarkation - tripStatus.debarkation;

                if(totalOnBoard == tripStatus.totalSeats){
                    msg = {status: false};
                    break;
                }
            }
        
        }

        if(msg.status){

            for (const booking of bookings) {

                const res = await this.repo.search(booking.trip_id, booking.user_id, booking.startStop, booking.endStop);
            
                if(res){
                    continue;
                }

                await this.repo.insertOne(booking);
                this.tripRepo.updateEmbarkation(booking.trip_id, booking.startStop, 1);
                this.tripRepo.updateDebarkation(booking.trip_id, booking.endStop, 1);

                const stopCodes: string[] = (await this.tripRepo.get(booking.trip_id)).map(v => v.stopCode);  
                const startIndex: number = stopCodes.indexOf(booking.startStop);
                const endIndex: number = stopCodes.indexOf(booking.endStop);
                const stops: string[] = stopCodes.slice(startIndex, endIndex);

                this.tripRepo.updateOccupation(stops, 1, booking.trip_id);
            }
            
        }

        return msg;
    }

    public async deleteBooking(email: string, trip_id: number){
        return this.repo.delete(email, trip_id)
    }

}
