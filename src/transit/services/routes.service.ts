import { Injectable } from '@nestjs/common';
import { Route } from '../entities/route.entity';
import { RouteRepository } from '../../repositories/route.repository';

@Injectable()
export class RouteService {

    constructor(private repo: RouteRepository) {}

    public getRoutes(): Promise<Route[]>{
        return this.repo.getAll();
    }

    public get(spec: any): Promise<Route[]>{
        return this.repo.get(spec);
    }

    public getLineRoutes(lineId: string): Promise<Route[]>{
        return this.repo.getRoutesByLineId(lineId);
    }

    public getStopRoutes(stopCode: string): Promise<Route[]>{
        return this.repo.getStopRoutes(stopCode);
    }

    public getSaved(user: string): Promise<Route[]>{
        return this.repo.getSaved(user);
    }

    public async insert(routes: Route[]): Promise<void>{
        this.repo.insert(routes);
    }

    public async insertStopCodes(codes: string[], stopCode: string): Promise<void>{
        this.repo.insertStops(codes, stopCode);
    }

}
