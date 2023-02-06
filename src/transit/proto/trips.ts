import { Schedule } from "../entities/schedule.entity";
import { DataService } from "../services/data.service";

/*  IN THIS FILE WE WILL BE CREATING A TRIP UPDATES PROTOBUF AND SERVE IT TO OTP 
    OTP MAPS THIS FILE TO THE STATIC SHCEDULE THAT IS INDICATED BY THE TRIP_ID AND UPDATES 
    IN REAL TIME THE ARRIVAL AND DEPARTURES TIMES BASED ON THE PREDICTIONS IN THE PROTOBUF
    HOWEVER IN OUR CASE WE DO NOT KNOW THE TRIP_ID OF EACH ACTIVE BUS. AS A RESULT WE WILL USE SOME
    TEST FILES ONLY AND SKIP THIS FEATURE FOR NOW
*/

export interface FeedHeader{
    gtfsRealtimeVersion: string;
    incrementality: number;
    timestamp: number;
}

export interface FeedMessage{
    header: FeedHeader;
    entity: FeedEntity[];
}

export interface FeedEntity {
    id: string;
    tripUpdate: TripUpdate;
}

export interface StopTimeEvent {
    delay?: number;
    time: number;
}

export interface StopTimeUpdate{
    stopSequence: number;
    stopId: string;
    arrival?: StopTimeEvent;
    departure: StopTimeEvent;
}

export interface TripUpdate {
    trip: TripDescriptor;
    stopTimeUpdate: StopTimeUpdate[];
}

export interface TripDescriptor {
    tripId: string;
    routeId: string;
    directionId: number;
    startTime?: string;
    startDate?: string;
}

export default class Trip{

    private data: DataService;
    private trip_ids: number[] = [159613, 158744];

    constructor(data: DataService){
        this.data = data;
    }

    public async updateContructor(){
  
        const header: FeedHeader = {gtfsRealtimeVersion: '2', incrementality: 1, timestamp: Date.now()};
        const message: FeedMessage = {header: header, entity: []};

        for (let i = 0; i < this.trip_ids.length; i++) {
            const sch: Schedule[] = await this.data.schedule.getTripOne(this.trip_ids[i]);
            const tripDesc: TripDescriptor = {tripId: sch[0].trip_id.toString(), routeId: sch[0].line, directionId: 0};
            const tripUpdate: TripUpdate = {trip: tripDesc, stopTimeUpdate: []};
            const entity: FeedEntity = {id: i + '', tripUpdate: tripUpdate};

            for (let j = 0; j < sch.length; j++) {
                const arr: number = sch[j].tripTimeMinute + Date.now() + 1;
                const dep: number = sch[j].tripTimeMinute + Date.now() + 2;
                const arrival: StopTimeEvent = {time: arr};
                const departure: StopTimeEvent = {time: dep};
                const stopTimeUpdate: StopTimeUpdate = {stopId: sch[j].stopCode, stopSequence: j, arrival: arrival, departure: departure};
                tripUpdate.stopTimeUpdate.push(stopTimeUpdate);
            }

            entity.tripUpdate = tripUpdate;
            message.entity.push(entity);
        }
        
        return message;
    }
}
  

