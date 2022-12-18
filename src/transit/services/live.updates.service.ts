import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';
import { FeedMessage, PositionProto } from '../proto/position';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class LiveUpdatesService {

    private readonly token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzEzNzA5OTR9.6Ash7mnx7kflUiyl8F26dyKJ5QcLyNv9n9qICAm37Zc';
    private readonly uri: string = 'https://rest.citybus.gr/api/v1/el/106/';
    
    constructor(private http: HttpService){}

    public async getLiveData(code: string, slug: string){
        const action: string = slug + code;
        return await lastValueFrom(this.http.get(this.uri + action, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log('error while fetching the live data'));
    }



}

