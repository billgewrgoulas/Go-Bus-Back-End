import { OnEvent } from "@nestjs/event-emitter";
import { Trip } from "../entities/trip.entity";
import { Injectable } from "@nestjs/common";
import { UpdateTrips } from "../events/trips.update.event";
import { TransitGateWay } from "src/socketsIO/transit.gateway";
import { Booking } from "src/user/entities/booking.entity";

@Injectable()
export class TripUpdatesListener{
    
    constructor(private io: TransitGateWay){}

    @OnEvent('trips.update', {async: true})
    public bookingCreated(event: UpdateTrips){
        
        for (const booking of event.getBookings) {
            this.updateDb(event, booking);
        }

        this.io.updateOccupancy(event.getValue, event.getBookings.map(b => b.trip_id));
    }

    @OnEvent('booking.deleted', {async: true})
    public async bookingDeleted(event: UpdateTrips){

        const booking: Booking = event.getBookings[0];
        const trip: Trip[] = await event.repo.trips.get(+booking.trip_id);
        const stops: string[] = trip.map(t => t.stopCode);
        const s: number = stops.indexOf(booking.startStop);
        const e: number = stops.indexOf(booking.endStop);
        booking.stopCodes = stops.splice(s, e - 1);

        await this.updateDb(event, booking);
        this.io.updateOccupancy(event.getValue, event.getBookings.map(b => b.trip_id));
    }

    private async updateDb(event: UpdateTrips, booking: Booking){
        await event.repo.trips.updateEmbarkation(booking.trip_id, booking.startStop, event.getValue);
        await event.repo.trips.updateDebarkation(booking.trip_id, booking.endStop, event.getValue);
        await event.repo.trips.updateOccupation(booking.stopCodes, event.getValue, booking.trip_id);
    }

}