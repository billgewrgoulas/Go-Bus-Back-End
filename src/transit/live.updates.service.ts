import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';

@Injectable()
export class LiveUpdatesService {

    private readonly token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njc5MDYxMjR9.2cr-5ScoPeDWH3TN30kWp5R1q6GsUKaBaxq22zpoTjE';
    private readonly uri: string = 'https://rest.citybus.gr/api/v1/106/';

    constructor(private http: HttpService){}

    public async getStopArrivals(code: string){
        const action: string = `stops/live/${code}`;
        return await lastValueFrom(this.http.get(this.uri + action, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

    public async getBusLocations(code: string){
        const action: string = `lines/live/${code}`;
        return await lastValueFrom(this.http.get(this.uri + action, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

}
