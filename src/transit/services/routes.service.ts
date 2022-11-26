import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Route } from '../entities/route.entity';
import { Context } from '../Navigator/context';
import { NavigatorStrategy } from '../Navigator/navigatorStrategy';
import { OTPStrategy } from '../Navigator/Strategies/otp.strategy';
import { SingleRouteStrategy } from '../Navigator/Strategies/transitBusStrategy';
import { RouteRepository } from '../repositories/route.repository';
import { Plan } from '../transitDtos/itinerary.dto';
import { TripState } from '../transitDtos/trip.state';

@Injectable()
export class RouteService {

    constructor(
        private repo: RouteRepository, 
        private context: Context<Route>, 
        private http: HttpService
    ) {}

    public getRoutes(): Promise<Route[]>{
        return this.repo.getAll();
    }

    public getLineRoutes(lineId: string): Promise<Route[]>{
        return this.repo.getRoutesByLineId(lineId);
    }

    public getCustomPath(tripState: TripState): Promise<Route[] | Plan>{
        
        if(tripState.strategy == 'simple_search'){
            this.context.setStrategy(new SingleRouteStrategy(), this.repo, this.http);
        }else{
            this.context.setStrategy(new OTPStrategy(), this.repo, this.http);
        }

        return this.context.execute(tripState);
    }

}
