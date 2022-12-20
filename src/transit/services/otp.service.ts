import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';
import { OTPParams, TripState } from '../transitDtos/trip.state';
import { Itinerary, Leg, Plan, Step, Vertex } from '../transitDtos/itinerary.dto';
import { Trip, TripStatus } from '../entities/tripStatus';
import { DataService } from './data.service';
import { TripStatusRepository } from 'src/repositories/tripStatus.repository';
import { TripRepository } from 'src/repositories/trip.repository';

@Injectable()
export class OTPService {

    private readonly uri: string = 'http://localhost:8080/otp/routers/default/plan?';
    
    constructor(private http: HttpService, private tripRepo: TripRepository){}

    public async getTrips(slug: string): Promise<any>{
        return lastValueFrom(this.http.get(this.uri + slug)).catch(e => console.log(e));
    }

    public async getPlan(state: TripState): Promise<Plan>{

        const otpParams: OTPParams = new OTPParams(state);
        const queryString: string = otpParams.buildQueryParams();
        const itineraries: Itinerary[] = [];
        const trip_ids: any[] = [];
        const stopCodes: string[] = [];

        const { data } = await <any>this.getTrips(queryString);
        const plan: Plan = <Plan>data.plan;
        
        for (const it of plan.itineraries) {

            if(it.transitTime == 0){
                continue;
            }

            const legs: Leg[] = [];
            for(const leg of it.legs){

                const stops: Vertex[] = [];
                const from: Vertex = new Vertex(leg.from);
                const to: Vertex = new Vertex(leg.to);
                const steps: Step[] = leg.steps.map(s => new Step(s));

                if(leg.intermediateStops){
                    leg.intermediateStops.forEach(s => stops.push(new Vertex(s)));
                }

                if(leg.mode == 'TRAM'){
                    trip_ids.push(+leg.tripId.split(":")[1]);
                    stopCodes.push(leg.from.stopCode);
                }

                legs.push(new Leg(leg, steps, from, to, stops, leg.legGeometry.points));
            }

            itineraries.push(new Itinerary(it, legs));
        }

        const new_plan: Plan = new Plan(plan, itineraries, queryString, state.arriveBy);   
        const trips: Trip[] = await this.tripRepo.getOccupation(trip_ids, stopCodes);     

        new_plan.itineraries.forEach(it => {
            it.legs.forEach(leg => {

                leg.setFlexGrow(it.duration);
                
                if(leg.mode == 'TRAM'){
                    const occupation: number = trips.find(t => t.trip_id == +leg.tripId).occupied;
                    leg.occupancyStatus = 30 - occupation;
                }

            });
        });

        return new_plan;
    }

}

