import { Line } from "../entities/line.entity";
import { Schedule } from "../entities/schedule.entity";
import { Stop } from "../entities/stop.entity";
import { DataService } from "../services/data.service";
import { LiveUpdatesService } from "../services/live.updates.service";
import { ArrivalDto } from "../transitDtos/arrival.dto";

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

    private defaultTrip = {};
    private live: LiveUpdatesService;
    private data: DataService;

    private trip: TripDescriptor = {tripId: '1', routeId: '2', directionId: 0, startDate: '1', startTime: '2'};
    private header: FeedHeader = {gtfsRealtimeVersion: '2', incrementality: 1, timestamp: 2};
    private arrival: StopTimeEvent = {time: 1, delay: 2};
    private departure: StopTimeEvent = {time: 2, delay: 1};
    private stopTimeUpdate: StopTimeUpdate = {stopId: '1', stopSequence: 2, arrival: this.arrival, departure: this.departure};
    private tripUpdate: TripUpdate = {trip: this.trip, stopTimeUpdate: [this.stopTimeUpdate, this.stopTimeUpdate]};
    private entity: FeedEntity = {id: '1', tripUpdate: this.tripUpdate};
    private message: FeedMessage = {header: this.header, entity: [this.entity, this.entity]};

    constructor(live: LiveUpdatesService, data: DataService){
        this.live = live;
        this.data = data;
    }

    public get getMessage(): FeedMessage{
        return this.message;
    }

    public async updateContructor(day: number){
        
        const lines: Line[] = await this.data.lines.getLines();

        for (const line of lines) {

            const { data } = <any>await this.live.getLiveData(line.name, 'lines/live/');

            if(data){
                
                let stops: Stop[] = [];
                for (const e of data) {
                    stops = await this.data.stops.getRouteStops(e.routeCode);
                }

                //for each stop of every route
                for (const stop of stops) {

                    const {data} = <any>await this.live.getLiveData(stop.code, 'stops/live/');

                    const tripUpdate: TripUpdate = {trip: undefined, stopTimeUpdate: []};
                    const trips: Schedule[] = await this.data.schedule.getTrips(data.routeCode, day, stop.code);
                    //for each arrival to the stop
                    if(data.vehicles){

                        for(const e of data.vehicles){

                            const trips: Schedule[] = await this.data.schedule.getTrips(e.routeCode, day, stop.code);

                            for (const trip of trips) {
                                
                                
                            }
                            
                        }
                    }




                }


            }   
            
        }
    }

    private createtMessage(sch: Schedule, arr: ArrivalDto, stopCode: string, seq: number){
        const trip: TripDescriptor = {tripId: sch.trip_id + '', routeId: sch.line, directionId: 0};
        const header: FeedHeader = {gtfsRealtimeVersion: '2', incrementality: 1, timestamp: Date.now()};

        const arrival: StopTimeEvent = {time: 1, delay: 0};
        const departure: StopTimeEvent = {time: Date.now() + Math.floor(arr.departureMins/60)};

        const stopTimeUpdate: StopTimeUpdate = {stopId: stopCode, stopSequence: seq, departure: departure};
        
        const tripUpdate: TripUpdate = {trip: this.trip, stopTimeUpdate: [this.stopTimeUpdate, this.stopTimeUpdate]};
        const entity: FeedEntity = {id: '1', tripUpdate: this.tripUpdate};
        const message: FeedMessage = {header: this.header, entity: [this.entity, this.entity]};
    }
}
  

