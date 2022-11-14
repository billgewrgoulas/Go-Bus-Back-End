import { Point } from "src/transit/entities/point.entity";
import { Stop } from "src/transit/entities/stop.entity";

export class RouteDto{
    public id: number;
    public code: string;
    public lineId: number;
    public direction: number;
    public desc_eng: string;
    public desc: string;
}

export class RouteInfoDto{

    public stops: Stop[];
    public points: Point[];
    public code: string;

    constructor(stops: Stop[], points: Point[], code: string){
        this.stops = stops;
        this.points = points = points;
        this.code = code;
    }
    
}