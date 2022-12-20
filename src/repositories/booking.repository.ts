import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Booking } from "src/transit/entities/tripStatus";
import { Repository, UpdateResult } from "typeorm";
import { Line } from "../transit/entities/line.entity";
import { IGenericRepository } from "./generic.repository";

@Injectable()
export class BookingRepository extends IGenericRepository<Booking>{

    public constructor(@InjectRepository(Booking) bookingRepo: Repository<Booking>){
        super(bookingRepo);
    }

    public override get(email: string): Promise<Booking[]> {
        return super.get({user_id: email});
    }

    public search(trip_id: number, email: string, startStop: string, endStop: string): Promise<Booking | void>{
        return super.getOne({trip_id: trip_id, user_id: email, startStop: startStop, endStop: endStop});
    }

    public override insertOne(booking: Booking) {
        return super.insertOne(booking);
    }

    public delete(email: string, trip_id: number, startStop: string, endStop: string) {
        return super.deleteOne({trip_id: trip_id, user_id: email, startStop: startStop, endStop: endStop});
    }

    public override insert(data: Booking[]): Promise<void | UpdateResult> {
        return super.insert(data);
    }
    
}