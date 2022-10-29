
export class Arrival{

    public arrivalMins: number;
    public arrivalSeconds: number;
    public routeCode: string;
    public vehicleCode: string;
    public routeName: string;
    public lineCode: string;
    public stopCode: string;

    public constructor(arr: Arrival, code: string){
        this.arrivalMins = arr.arrivalMins;
        this.arrivalSeconds = arr.arrivalSeconds;
        this.routeCode = arr.routeCode;
        this.vehicleCode = arr.vehicleCode;
        this.routeName = arr.routeName;
        this.lineCode = arr.lineCode;
        this.stopCode = code;
    }
}