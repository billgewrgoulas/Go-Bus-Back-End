import { Stop } from "src/transit/entities/stop.entity";

export class ArrivalDto{

    public departureMins: number;
    public departureSeconds: number;
    public routeCode: string;
    public vehicleCode: string;
    public routeName: string;
    public lineCode: string;
    public longitude: string;
    public latitude: string;

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