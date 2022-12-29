import { OnEvent } from "@nestjs/event-emitter";
import { Booking, Trip } from "../entities/tripStatus";
import { Injectable } from "@nestjs/common";
import { UpdateTrips } from "../events/trips.update.event";
import { TransitGateWay } from "src/socketsIO/transit.gateway";

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
        const trip: Trip[] = await event.repo.get(booking.trip_id);
        const stops: string[] = trip.map(t => t.stopCode);
        const s: number = stops.indexOf(booking.startStop);
        const e: number = stops.indexOf(booking.endStop);
        booking.stopCodes = stops.splice(s, e - 1);

        this.updateDb(event, booking);
        this.io.updateOccupancy(event.getValue, event.getBookings.map(b => b.trip_id));
    }

    private updateDb(event: UpdateTrips, booking: Booking){
        event.repo.updateEmbarkation(booking.trip_id, booking.startStop, event.getValue);
        event.repo.updateDebarkation(booking.trip_id, booking.endStop, event.getValue);
        event.repo.updateOccupation(booking.stopCodes, event.getValue, booking.trip_id);
    }

}