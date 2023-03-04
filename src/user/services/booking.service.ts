import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BookingRepository } from 'src/repositories/booking.repository';
import { Trip } from '../../transit/entities/trip.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UpdateTrips } from '../../transit/events/trips.update.event';
import { DataService } from 'src/transit/services/data.service';
import { Booking } from '../entities/booking.entity';
import { Schedule } from 'src/transit/entities/schedule.entity';

@Injectable()
export class BookingService {

    constructor(
        private repo: BookingRepository, 
        private data: DataService,
        private eventEmitter: EventEmitter2,
    ) {}

    public async getBookings(user_id: string): Promise<Booking[]>{
        return this.repo.get(user_id);
    }

    public async deleteBooking(booking: Booking){
        this.repo.delete(booking.user_id, booking.trip_id, booking.startStop, booking.endStop);
        this.eventEmitter.emit('booking.deleted', new UpdateTrips([booking], this.data, -1));
        return {trip_ids: [booking.trip_id]};
    }

    public async insertBooking(bookings: Booking[]): Promise<any>{

        for (const booking of bookings) {

            const stopCodes: string[] = [];
            const ub: Booking[] = await this.repo.get(booking.user_id);
            const trip: Trip[] = await this.data.trips.get(booking.trip_id);
            const schedule: Schedule[] = await this.data.schedule.getTripOne(booking.trip_id);
            const exists: Booking | undefined = ub.find(b => b.trip_id == booking.trip_id);
            const maxOcc: number = this.maxOccupation(trip, booking, stopCodes);

            if(exists){
                this.throwError('Το δρομολόγιο ειναι ήδη κρατημένο');
                return;
            }

            if(maxOcc >= +trip[0].totalSeats){
                this.throwError('Δεν υπάρχει διαθέσιμη θέση');
                return;
            }

            this.checkOverlap(ub, booking);
            this.checkCurrentTime(booking, schedule[0]);
            booking.stopCodes = stopCodes;
        }

        await this.repo.insert(bookings);
        this.eventEmitter.emit('trips.update', new UpdateTrips(bookings, this.data, 1));
        return {trip_ids: bookings.map(b => b.trip_id)};
    }

    private throwError(msg: string){
        throw new HttpException({
          status: HttpStatus.FORBIDDEN, error: msg
        }, HttpStatus.FORBIDDEN);
    }

    private checkCurrentTime(booking: Booking, schedule: Schedule){
        const schedule_date: number = new Date(booking.date + 'T' + schedule.tripTime).getTime();
        const now: number = new Date().getTime();
        const diff: number = Math.floor((schedule_date - now)/60000);

        if(diff < 30){
            this.throwError('Δεν είναι δυνατή η κράτηση μέσα σε λιγότερο από 30 λεπτά πρίν την αναχώρηση');
        }
    }

    private checkOverlap(bookings: Booking[], booking: Booking){

        const today: Booking[] = [booking, ...bookings.filter(b => b.date === booking.date)];
        let intervals: number[][] = [];

        for(let i = 0; i < today.length; i++){
            const travel: number[] = today[i].travel.split(":").map(n => +n);
            const arrive: number[] = today[i].arrive.split(":").map(n => +n);
            const start: number = 60 * travel[0] + travel[1];
            const end: number = 60 * arrive[0] + arrive[1];
            intervals.push([start, end]);
        }

        intervals = intervals.sort((a, b) => a[0] - b[0]);
        for(let i = 0; i < intervals.length - 1; i++){
            if(intervals[i][1] > intervals[i + 1][0]){
                this.throwError('Η κράτηση δεν μπορεί να πραγματοποιθεί γιατί υπάρχει άλλο προγραμματισμένο δρομολόγιο αυτήν την ώρα');
            }
        }

    }

    private maxOccupation(trips: Trip[], booking: Booking, codes: string[]): number{
        let max = 0;
        const s: number = trips.findIndex(t => t.stopCode == booking.startStop);

        for(let i = s; s < trips.length; i++){
            if(trips[i].stopCode == booking.endStop){
                return max;
            }else if(+trips[i].occupied > max){
                max = +trips[i].occupied;
            }
            codes.push(trips[i].stopCode);
        }

        return max;
    }
}
