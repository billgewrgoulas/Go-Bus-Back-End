import { HttpService } from "@nestjs/axios";
import { Route } from "src/transit/entities/route.entity";
import { RouteRepository } from "src/repositories/route.repository";
import { OTPService } from "src/transit/services/otp.service";
import { Itinerary, Leg, Plan, Step, Vertex } from "src/transit/transitDtos/itinerary.dto";
import { OTPParams, TripState } from "src/transit/transitDtos/trip.state";
import { NavigatorStrategy } from "../navigatorStrategy";

export class OTPStrategy implements NavigatorStrategy<Route>{

    public async buildRoute(tripState: TripState, routeRepo: RouteRepository, http: HttpService): Promise<Plan> {
        
        return;
    }

}