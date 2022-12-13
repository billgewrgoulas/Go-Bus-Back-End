
export interface FeedHeader{
    gtfsRealtimeVersion: string;
    incrimentality: number;
    timestamp: number;
}

export interface TripDescriptor{
    tripId: string;
    startDate: string;
    routeId: string;
    directionId: number;
}

export interface Position{
    latitude: number;
    longitude: number;
}

export interface Long{
    low: number;
    high: number;
    unsigned: boolean;
}  

export interface VehicleDescriptor{
    id: string;
    label: string;
}

export interface VehiclePosition{
    currentStopSequence: number;
    stopId: string;
    occupancyStatus: number;
    trip: TripDescriptor;
    position: Position;
    timestamp: Long;
    vehicle: VehicleDescriptor;
}

export interface FeedEntity{
    id: string;
    vehicle: VehiclePosition;
}

export interface FeedMessage{
    header: FeedHeader;
    entity: FeedEntity[];
}

export class PositionProto{

    constructor(){}

    public async createProto(data: FeedMessage){
        
    }


}