import { Injectable } from '@nestjs/common';
import { Stop } from '../entities/stop.entity';
import { StopRepository } from '../../repositories/stop.repository';

@Injectable()
export class StopService {

    constructor(private repo: StopRepository) {}

    public async getStops(): Promise<Stop[]>{
        return this.repo.getAll();
    }

    public async getRouteStops(routeCode: string): Promise<Stop[]>{
        return this.repo.getRouteStops(routeCode);
    }

    public async getStopLines(): Promise<any[]>{
        return this.repo.getStopLines();
    }
    
    public updateStopLines(lines: string[], code: string){
        this.repo.updateStopLines(code, lines);
    }

    public get(spec: any): Promise<Stop[]>{
        return this.repo.get(spec);
    }

    public getSaved(user: string): Promise<Stop[]>{
        return this.repo.getSaved(user);
    }

    public async insert(stops: Stop[]){
        this.repo.insert(stops);
    }

    public getOne(code: string): Promise<Stop | void>{
        return this.repo.getOne({code: code});
    }

}
