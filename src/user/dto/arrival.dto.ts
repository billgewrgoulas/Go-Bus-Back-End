import { Stop } from "src/transit/entities/stop.entity";

export class Arrival{

    public arrivalMins: number;
    public arrivalSeconds: number;
    public routeCode: string;
    public vehicleCode: string;
    public routeName: string;
    public lineCode: string;
    public longitude: string;
    public latitude: string;
    public nextStop: string;

    public constructor(arr: Arrival){
        this.arrivalMins = arr.arrivalMins;
        this.arrivalSeconds = arr.arrivalSeconds;
        this.routeCode = arr.routeCode;
        this.vehicleCode = arr.vehicleCode;
        this.routeName = arr.routeName;
        this.lineCode = arr.lineCode;
        this.latitude = arr.latitude;
        this.longitude = arr.longitude;
    }

    public setNext(stop: Stop | undefined){

        if(stop){
            this.nextStop = stop.desc
        }

    }
}