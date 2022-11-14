import { Stop } from "src/transit/entities/stop.entity";

export class ArrivalDto{

    private departureMins: number;
    private departureSeconds: number;
    private routeCode: string;
    private vehicleCode: string;
    private routeName: string;
    private lineCode: string;
    private longitude: string;
    private latitude: string;

    public constructor(arr: any){
        this.departureMins = arr.departureMins;
        this.departureSeconds = arr.departureSeconds;
        this.routeCode = arr.routeCode;
        this.vehicleCode = arr.vehicleCode;
        this.routeName = arr.routeName;
        this.lineCode = arr.lineCode;
        this.latitude = arr.latitude;
        this.longitude = arr.longitude;
    }

}