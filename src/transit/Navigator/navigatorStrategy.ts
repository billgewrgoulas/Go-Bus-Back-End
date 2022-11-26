import { HttpService } from "@nestjs/axios";
import { TripState } from "src/transit/transitDtos/trip.state";
import { IGenericRepository } from "../repositories/generic.repository";

export interface NavigatorStrategy<T>{
    buildRoute(tripState: TripState, repository: IGenericRepository<T>, http: HttpService): any;
}