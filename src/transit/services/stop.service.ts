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

}
