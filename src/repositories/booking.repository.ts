import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { IGenericRepository } from "./generic.repository";
import { Booking } from "src/user/entities/booking.entity";

@Injectable()
export class BookingRepository extends IGenericRepository<Booking>{

    public constructor(@InjectRepository(Booking) bookingRepo: Repository<Booking>){
        super(bookingRepo);
    }

    public override get(user_id: string): Promise<Booking[]> {
        return super.get({user_id: user_id});
    }

    public search(trip_id: number, user_id: string): Promise<Booking | void>{
        return super.getOne({trip_id: trip_id, user_id: user_id});
    }

    public override insertOne(booking: Booking) {
        return super.insertOne(booking);
    }

    public delete(user_id: string, trip_id: number, startStop: string, endStop: string) {
        return super.deleteOne({trip_id: trip_id, user_id: user_id, startStop: startStop, endStop: endStop});
    }

    public override insert(data: Booking[]): Promise<void | UpdateResult> {
        return super.insert(data);
    }
    
}