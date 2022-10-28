import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';

@Injectable()
export class OasaService {

    private readonly URI: string = 'http://telematics.oasa.gr/api/?act=';
    private readonly token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjcxMzQwNDd9.6UXqCSArk6pittUOXVlD1ZQj9s5wVu-x6Q2skhG9u24';

    constructor(private http: HttpService){}

    public getPath(routeCode: string): Promise<any>{
        const action = 'webGetRoutesDetailsAndStops&p1=' + routeCode;
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public getStopArrivals(stopCode: string): Promise<any>{
        const action = 'getStopArrivals&p1=' + stopCode;
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public getAllLines(): Promise<any>{
        const action = 'webGetLinesWithMLInfo';
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public getRouteDetails(lineCode: string): Promise<any>{
        const action = 'webGetRoutes&p1=' + lineCode;
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public getBusLocations(routeCode: string): Promise<any>{
        const action = 'getBusLocation&p1=' + routeCode;
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public getMLInfo(lineCode: string): Promise<any>{
        const action = 'getScheduleDaysMasterline&p1=' + lineCode;
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public getSchedules(lineCode: string, ml: string, sdc: string): Promise<any>{
        const action = `getSchedLines&p1=${ml}&p2=${sdc}&p3=${lineCode}`;
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public getPoints(routeCode: string): Promise<any>{
        const action = `webRouteDetails&p1=${routeCode}`;
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public getStops(routeCode: string): Promise<any>{
        const action = `webGetStops&p1=${routeCode}`;
        return lastValueFrom(this.http.post(this.URI + action));
    }

    public async getLines(){
        const uri = 'https://rest.citybus.gr/api/v1/106/lines/';
        return await lastValueFrom(this.http.get(uri, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e));
    }

    public async getRoute(code: string){
        const uri = 'https://rest.citybus.gr/api/v1/106/routes/' + code;
        return await lastValueFrom(this.http.get(uri, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e));
    }

    public async getRoutePoints(code: string){
        const uri = `https://rest.citybus.gr/api/v1/106/routes/${code}/points/`;
        return await lastValueFrom(this.http.get(uri, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e));
    }
}
