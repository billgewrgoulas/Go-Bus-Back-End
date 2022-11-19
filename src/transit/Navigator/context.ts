import { TripState } from "src/transit/transitDtos/trip.state";
import { Repository } from "typeorm";
import { IGenericRepository } from "../repositories/generic.repository";
import { NavigatorStrategy } from "./navigatorStrategy";

export class Context<T>{

    private strategy: NavigatorStrategy;
    private repository: IGenericRepository<T>;

    public execute(tripState: TripState) {
        return this.strategy.buildRoute(tripState, this.repository);
    }

    public setStrategy(strategy: NavigatorStrategy, repository: IGenericRepository<T>){
        this.strategy = strategy;
        this.repository = repository;
    }

}