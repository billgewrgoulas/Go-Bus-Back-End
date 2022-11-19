import { Injectable } from '@nestjs/common';
import { Route } from '../entities/route.entity';
import { Context } from '../Navigator/context';
import { NavigatorStrategy } from '../Navigator/navigatorStrategy';
import { SingleRouteStrategy } from '../Navigator/Strategies/transitBusStrategy';
import { RouteRepository } from '../repositories/route.repository';
import { TripState } from '../transitDtos/trip.state';

@Injectable()
export class RouteService {

    constructor(private repo: RouteRepository, private context: Context<Route>) {}

    public async getRoutes(): Promise<Route[]>{
        return this.repo.getAll();
    }

    public async getLineRoutes(lineId: string): Promise<Route[]>{
        return this.repo.getRoutesByLineId(lineId);
    }

    public async getCustomPath(tripState: TripState): Promise<Route[]>{
        
        if(tripState.options.length == 0){
            this.context.setStrategy(new SingleRouteStrategy(), this.repo);
        }

        return this.context.execute(tripState);
    }

}
