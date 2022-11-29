import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';

@Injectable()
export class LiveUpdatesService {

    private readonly token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njk5Mjg3Njd9.90CAjQ-07oMEIViYya4n7ct7eloiHbqLmtF-iD67_VU';
    private readonly uri: string = 'https://rest.citybus.gr/api/v1/el/106/';
    
    constructor(private http: HttpService){}

    public async getLiveData(code: string, slug: string){
        const action: string = slug + code;
        return await lastValueFrom(this.http.get(this.uri + action, {withCredentials: false, headers:{
            Authorization: 'Bearer ' + this.token,
        }})).catch(e => console.log(e.response.status));
    }

}

