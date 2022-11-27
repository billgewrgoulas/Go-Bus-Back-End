import { HttpService } from "@nestjs/axios";
import { Route } from "src/transit/entities/route.entity";
import { RouteRepository } from "src/transit/repositories/route.repository";
import { OTPService } from "src/transit/services/otp.service";
import { Itinerary, Leg, Plan, Step, Vertex } from "src/transit/transitDtos/itinerary.dto";
import { OTPParams, TripState } from "src/transit/transitDtos/trip.state";
import { NavigatorStrategy } from "../navigatorStrategy";

export class OTPStrategy implements NavigatorStrategy<Route>{

    public async buildRoute(tripState: TripState, routeRepo: RouteRepository, http: HttpService): Promise<Plan> {
        
        const otp: OTPService = new OTPService(http);
        const otpParams: OTPParams = new OTPParams(tripState);
        const queryString: string = otpParams.buildQueryParams();

        const { data } = await <any>otp.getTrips(queryString);
        const plan: Plan = <Plan>data.plan;

        let totalWlk = 0;
        let duration = 0;

        const itineraries: Itinerary[] = [];
        for (const it of plan.itineraries) {

            duration += it.duration;
            totalWlk += it.walkTime;
            
            const legs: Leg[] = [];
            for(const leg of it.legs){

                const steps: Step[] = [];
                const stops: Vertex[] = [];
                const from: Vertex = new Vertex(leg.from);
                const to: Vertex = new Vertex(leg.to);

                leg.steps.forEach(s => steps.push(new Step(s)));

                if(leg.intermediateStops){
                    leg.intermediateStops.forEach(s => stops.push(new Vertex(s)));
                }
                
                legs.push(new Leg(leg, steps, from, to, stops, leg.legGeometry.points));
            }

            itineraries.push(new Itinerary(it, legs));
        }

        const new_plan: Plan = new Plan(plan, itineraries, duration, totalWlk);        
        new_plan.itineraries.forEach(it => it.legs.forEach(leg => leg.setFlexGrow(it.duration)));

        return new_plan;
    }

}