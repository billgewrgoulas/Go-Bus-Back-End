import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { DataService } from './data.service';
import { ArrivalDto } from '../transitDtos/arrival.dto';
import { Stop } from '../entities/stop.entity';


@Injectable()
export class LiveUpdatesService {

    private readonly token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzU4NTEwMzJ9.k_Zny_XOg1885v7WJDZf6oAXhqjaQ1AQyUGyACxgBfc';
    private readonly uri: string = 'https://dev-rest.citybus.gr/api/v1/el/106/';
    
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
                arrival.arrivalMins = 0;
                arrival.arrivalSeconds = 0;
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
        }

        return arrivals;
    }

}

