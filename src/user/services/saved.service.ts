import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import { UserRepository } from 'src/repositories/user.repository';
import { DataService } from 'src/transit/services/data.service';

@Injectable()
export class SavedService {

    constructor(private repo: UserRepository, private data: DataService) {}

    public insertStop(code: string, user: string){
        this.repo.insertStop(code, user);
    }

    public insertRoute(user: string, code: string){
        this.repo.insertRoute(code, user);
    }

    public deleteRoute(user: string, code: string){
        this.repo.deleteRoute(code, user);
    }

    public deleteStop(code: string, user: string){
        this.repo.deleteStop(code, user);
    }

    public getStops(user: string): Promise<string[]>{
        return this.repo.getAllStops(user);
    }

    public getRoutes(user: string){
        return this.repo.getAllRoutes(user);
    }

    public async getInfo(user: string){

        const promise = await Promise.all([
            this.data.routes.getSaved(user),
            this.data.stops.getSaved(user)
        ]);

        return {stops: promise[1], routes: promise[0]};
    }

}
