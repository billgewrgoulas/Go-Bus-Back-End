import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';
import { OTPParams, TripState } from '../transitDtos/trip.state';
import { Itinerary, Leg, Plan, Step, Vertex } from '../transitDtos/itinerary.dto';

@Injectable()
export class OTPService {

    private readonly uri: string = 'http://localhost:8080/otp/routers/default/plan?';
    
    constructor(private http: HttpService){}

    public async getTrips(slug: string): Promise<any>{
        return lastValueFrom(this.http.get(this.uri + slug)).catch(e => console.log(e));
    }

    public async getPlan(state: TripState): Promise<Plan>{

        const otpParams: OTPParams = new OTPParams(state);
        const queryString: string = otpParams.buildQueryParams();
        const itineraries: Itinerary[] = [];

        const { data } = await <any>this.getTrips(queryString);
        const plan: Plan = <Plan>data.plan;
        
        for (const it of plan.itineraries) {

            if(it.transitTime == 0){
                continue;
            }

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
        
        const new_plan: Plan = new Plan(plan, itineraries, queryString);        
        new_plan.itineraries.forEach(it => it.legs.forEach(leg => leg.setFlexGrow(it.duration)));

        return new_plan;
    }

}

