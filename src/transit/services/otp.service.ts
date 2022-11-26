import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, of } from 'rxjs';

@Injectable()
export class OTPService {

    private readonly uri: string = 'http://localhost:8080/otp/routers/default/plan?';
    
    constructor(private http: HttpService){}

    public async getTrips(slug: string): Promise<any>{
        console.log(this.uri + slug);
        return lastValueFrom(this.http.get(this.uri + slug)).catch(e => console.log(e));
    }

}

