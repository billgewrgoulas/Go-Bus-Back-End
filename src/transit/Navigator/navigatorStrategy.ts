import { TripState } from "src/transit/transitDtos/trip.state";
import { IGenericRepository } from "../repositories/generic.repository";

export interface NavigatorStrategy{
    buildRoute(tripState: TripState, repository: IGenericRepository<any>): any;
}