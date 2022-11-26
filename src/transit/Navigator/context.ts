import { HttpService } from "@nestjs/axios";
import { TripState } from "src/transit/transitDtos/trip.state";
import { Repository } from "typeorm";
import { IGenericRepository } from "../repositories/generic.repository";
import { NavigatorStrategy } from "./navigatorStrategy";

export class Context<T>{

    private strategy: NavigatorStrategy<T>;
    private repository: IGenericRepository<T>;
    private http: HttpService;

    public execute(tripState: TripState) {
        return this.strategy.buildRoute(tripState, this.repository, this.http);
    }

    public setStrategy(strategy: NavigatorStrategy<T>, repository: IGenericRepository<T>, http: HttpService){
        this.strategy = strategy;
        this.repository = repository;
        this.http = http;
    }

}