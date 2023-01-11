import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BookingRepository } from 'src/repositories/booking.repository';
import { TripRepository } from 'src/repositories/trip.repository';
import { Booking, Trip } from '../entities/tripStatus';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UpdateTrips } from '../events/trips.update.event';
import { TransitGateWay } from 'src/socketsIO/transit.gateway';

@Injectable()
export class BookingService {

    constructor(
        private repo: BookingRepository, 
        private tripRepo: TripRepository,
        private eventEmitter: EventEmitter2,
    ) {}

    public async getBookings(email: string): Promise<Booking[]>{
        return this.repo.get(email);
    }

    public async deleteBooking(booking: Booking){
        this.repo.delete(booking.user_id, booking.trip_id, booking.startStop, booking.endStop);
        this.eventEmitter.emit('booking.deleted', new UpdateTrips([booking], this.tripRepo, -1));
        return {trip_ids: [booking.trip_id]};
    }

    public async insertBooking(bookings: Booking[]): Promise<any>{

        for (const booking of bookings) {
            const res: Booking | void = await this.repo.search(booking.trip_id, booking.user_id);
            if(res){
                this.throwError('Trip already booked');
            }
        }

        for (const booking of bookings) {
            
            const tripStatus: Trip | void = await this.tripRepo.getStatus(booking.trip_id, booking.startStop);
            if(!tripStatus){
                this.throwError('Booking not possible, try again later');
                break;
            }

            const totalOnBoard: number = +tripStatus.occupied + +tripStatus.embarkation - +tripStatus.debarkation;
            if(totalOnBoard > tripStatus.totalSeats){
                this.throwError('No seats available');
            }
            
        }

        this.repo.insert(bookings);
        this.eventEmitter.emit('trips.update', new UpdateTrips(bookings, this.tripRepo, 1));
        return {trip_ids: bookings.map(b => b.trip_id)};
    }

    private throwError(msg: string){
        throw new HttpException({
          status: HttpStatus.FORBIDDEN, error: msg
        }, HttpStatus.FORBIDDEN);
    }

}
