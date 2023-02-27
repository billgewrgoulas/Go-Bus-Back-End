import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { DataService } from './data.service';
import { ArrivalDto } from '../transitDtos/arrival.dto';
import { Stop } from '../entities/stop.entity';
import { Schedule } from '../entities/schedule.entity';


@Injectable()
export class LiveUpdatesService {

    private readonly token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzcwNjc3MzJ9.CQ24fO4ha75xLy2hBYK5fIEFjuDctGbwovystv8PaQs';
    private readonly uri: string = 'https://rest.citybus.gr/api/v1/el/106/';
    
    constructor(private http: HttpService, private data: DataService){}

    public async getLiveData(code: string, slug: string): Promise<any>{
        const action: string = slug + code;
        return await lastValueFrom(this.http.get(this.uri + action, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log('remote api cant be reached'));
    }

    public async liveDataBuilder(stopCode: string): Promise<ArrivalDto[]>{

        const prom = <any>await this.getLiveData(stopCode, 'stops/live/');
        const stop: Stop | void = await this.data.stops.getOne(stopCode);

        if(!prom || !prom.data || !prom.data.vehicles){
            return [];
        }

        const arrivals: ArrivalDto[] = prom.data.vehicles.map((v: any) => new ArrivalDto(v));

        if(!stop){
            return arrivals;
        }

        for (const arrival of arrivals) {

            if(+arrival.latitude == 0 || +arrival.longitude == 0){
                continue;
            }

            const s: string = arrival.latitude + ',' + arrival.longitude;
            const e: string = stop.latitude + ',' + stop.longitude;
            const plan: any = await this.data.otp.getBus(s, e);

            if(!plan || !plan.data.plan){
                continue;
            }

            const it = plan.data.plan.itineraries[0];
            
            if(!it){
                continue;
            }

            let arrivalMins = Math.floor(it.duration / 60);
            let arrivalSeconds = it.duration - arrivalMins * 60; 

            arrival.arrivalMins = arrivalMins;
            arrival.arrivalSeconds = arrivalSeconds;

            const day: number = new Date().getDay();
            const schedule: Schedule[] = await this.data.schedule.getTrips(arrival.routeCode, day, stopCode);

            if(schedule.length == 0){
                continue;
            }

            arrival.stop = `${stop.desc}(${stop.code})`;
            arrival.delayMins = this.getDelay(schedule, arrival);
        }

        return arrivals;
    }

    private getDelay(sch: Schedule[], arr: ArrivalDto){

        const date: Date = new Date();
        const departure: number = date.getHours() * 60 + date.getMinutes() + arr.departureMins;
        const times: number[] = sch.map(s => s.tripTimeHour * 60 + s.tripTimeMinute);
        const dif: number[] = times.map(t => departure - t);
        const delay: number = Math.min(...dif);

        if(Math.abs(delay) < 11){
            return delay;
        }

        return 0;
    }

}

