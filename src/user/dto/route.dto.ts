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

export class RouteInfo{
    public stops: Stop[];
    public points: Point[];
}