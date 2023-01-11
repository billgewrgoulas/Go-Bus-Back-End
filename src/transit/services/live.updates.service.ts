import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';
import { DataService } from './data.service';
import { ArrivalDto } from '../transitDtos/arrival.dto';
import { Trip } from '../entities/tripStatus';
import { Schedule } from '../entities/schedule.entity';
import { Stop } from '../entities/stop.entity';
import { Interval } from '@nestjs/schedule';


@Injectable()
export class LiveUpdatesService {

    private readonly token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzM2MTI5MTl9.A8Cdo5xmeVtg0n1HaAQ5zLWnCED9SrWVNiC81PkPHWc';
    private readonly uri: string = 'https://rest.citybus.gr/api/v1/el/106/';
    
    constructor(private http: HttpService, private data: DataService){}

    public async getLiveData(code: string, slug: string): Promise<any>{
        const action: string = slug + code;
        return await lastValueFrom(this.http.get(this.uri + action, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => {});
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
            const it = plan.data.plan.itineraries[0];
            
            if(!it){
                continue;
            }

            const arrivalMins = Math.floor(it.duration / 60);
            const arrivalSeconds = it.duration - arrivalMins * 60;

            arrival.arrivalMins = arrivalMins;
            arrival.arrivalSeconds = arrivalSeconds;
        }

        return arrivals;
    }

}

