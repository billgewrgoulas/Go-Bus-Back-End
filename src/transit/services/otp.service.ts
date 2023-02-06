import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { OTPParams, TripState } from '../transitDtos/trip.state';
import { Itinerary, Leg, Plan, Step, Vertex } from '../transitDtos/itinerary.dto';
import { Trip } from '../entities/trip.entity';
import { TripRepository } from 'src/repositories/trip.repository';
import { Booking } from 'src/user/entities/booking.entity';
import { connect } from 'http2';

@Injectable()
export class OTPService {

    private readonly uri: string = 'http://localhost:8080/otp/routers/default/plan?';
    
    constructor(private http: HttpService, private tripRepo: TripRepository){}

    public async getTrips(slug: string): Promise<any>{
        return lastValueFrom(this.http.get(this.uri + slug)).catch(e => console.log(e));
    }

    public async getBus(start: string, end: string): Promise<any>{
                
        const url: string = `http://localhost:8080/otp/routers/default/plan?fromPlace=${start}&toPlace=${end}&time=1:19pm&date=01-09-2023&mode=CAR_PICKUP%2CTRANSIT&arriveBy=false&wheelchair=false&showIntermediateStops=true&debugItineraryFilter=false&locale=en`;
        return lastValueFrom(this.http.get(url)).catch(e => console.log(e));
    }

    public async getBookingPlan(booking: Booking): Promise<Plan>{

        const { data } = await this.getTrips(booking.slug);
        const plan: Plan = <Plan>data.plan;
        const new_plan: Plan = await this.planBuilder(plan, '');
        const itineraries: Itinerary[] = [];
        const legs: Leg[] = [];

        new_plan.itineraries.forEach(it => {
            it.legs.forEach(leg => {
                if( leg.mode == 'TRAM' && 
                    +leg.tripId == booking.trip_id && 
                    leg.from.stopCode == booking.startStop &&
                    leg.to.stopCode == booking.endStop
                ){
                    legs.push(leg);
                    it.duration = leg.duration;
                    it.startTime = leg.startTime;
                    it.endTime = leg.endTime;
                    new_plan.from = leg.from;
                    new_plan.to = leg.to;
                    itineraries.push(it);
                }
            });
            it.legs = legs;
        });

        new_plan.from.name = booking.start;
        new_plan.to.name = booking.end;
        new_plan.itineraries = itineraries;
        
        return new_plan;
    }

    public async getPlan(state: TripState): Promise<Plan>{

        const otpParams: OTPParams = new OTPParams(state);
        const queryString: string = otpParams.buildQueryParams();
        const { data } = await <any>this.getTrips(queryString);
        const plan: Plan = <Plan>data.plan;
        const new_plan: Plan = await this.planBuilder(plan, queryString);

        new_plan.from.name = state.start[1];
        new_plan.to.name = state.destination[1];
        
        return new_plan;
    }

    private async planBuilder(plan: Plan, slug: string): Promise<Plan>{

        const itineraries: Itinerary[] = [];
        const trip_ids: any[] = [];

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
                    trip_ids.push(+leg.tripId.split(":")[1]);
                }

                legs.push(new Leg(leg, steps, from, to, stops, leg.legGeometry.points));
            }

            itineraries.push(new Itinerary(it, legs));
        }

        const new_plan: Plan = new Plan(plan, itineraries, slug);   
        const occupancy: any = {};  

        for (const it of new_plan.itineraries) {
            for (const leg of it.legs) {
                leg.setFlexGrow(it.duration);
                if(leg.mode == 'TRAM'){
                    const codes: string[] = [leg.from.stopCode, ...leg.intermediateStops.map(s => s.stopCode)];
                    const trip: Trip[] = await this.tripRepo.getMaxOccupation(codes, +leg.tripId);
                    occupancy[leg.tripId] = trip[0].totalSeats - trip[0].occupied;
                }
            }
        }

        new_plan.from.name = plan.from.name;
        new_plan.occupancy = occupancy;
        return new_plan;
    }

}

