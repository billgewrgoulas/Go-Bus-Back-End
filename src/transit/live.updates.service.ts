import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';

@Injectable()
export class LiveUpdatesService {

    private readonly token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjcxMzQwNDd9.6UXqCSArk6pittUOXVlD1ZQj9s5wVu-x6Q2skhG9u24';
    private readonly uri: string = 'https://rest.citybus.gr/api/v1/106/';

    constructor(private http: HttpService){}

    public async getStopArrivals(code: string){
        const action: string = `stops/live/${code}`;
        return await lastValueFrom(this.http.get(this.uri + action, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.code));
    }

}
