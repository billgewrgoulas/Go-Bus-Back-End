import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DBUpdateService {

    private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzM0MzMwNjN9.oviHabOmnHxFzHyykmeF5-W9pv5bT6UeP7vWwI-IzEY';
    private url: string = 'https://rest.citybus.gr/api/v1/el/106/';

    constructor(private http: HttpService){}

    public async getLines(){
        return await lastValueFrom(this.http.get(this.url + 'lines', {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

    public async getStops(){
        return await lastValueFrom(this.http.get(this.url + 'stops', {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

    public async getRoutes(){
        return await lastValueFrom(this.http.get(this.url + 'routes', {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

    public async getRouteInfo(code: string){
        return await lastValueFrom(this.http.get(this.url + 'routes/' + code, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

    public async getRoutePoints(code: string){
        return await lastValueFrom(this.http.get(this.url + `routes/${code}/points/`, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

    public async getRouteTrips(code: string){
        return await lastValueFrom(this.http.get(this.url + `trips/route/${code}`, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

}
