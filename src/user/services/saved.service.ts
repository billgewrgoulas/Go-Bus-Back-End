import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import { SavedRepository } from 'src/repositories/saved.repository';
import { DataService } from 'src/transit/services/data.service';

@Injectable()
export class SavedService {

    constructor(private repo: SavedRepository, private data: DataService) {}

    public insertStop(code: string, user: string){
        this.repo.insertStop(code, user);
        return {msg: 'Stop saved succesfully'};
    }

    public insertRoute(user: string, code: string){
        this.repo.insertRoute(code, user);
        return {msg: 'Route saved succesfully'};
    }

    public deleteRoute(user: string, code: string){
        this.repo.deleteRoute(code, user);
        return {msg: 'Route deleted succesfully'};
    }

    public deleteStop(code: string, user: string){
        this.repo.deleteStop(code, user);
        return {msg: 'Stop deleted succesfully'};
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
