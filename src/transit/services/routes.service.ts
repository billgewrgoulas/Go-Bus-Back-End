import { Injectable } from '@nestjs/common';
import { Route } from '../entities/route.entity';
import { RouteRepository } from '../../repositories/route.repository';
import { Code } from 'typeorm';

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

    public async getStopRoutes(stopCode: string): Promise<string[]>{
        const routes: Route[] = await this.repo.getStopRoutes(stopCode);
        return routes.map(r => r.code);
    }

    public async getSaved(user: string): Promise<string[]>{
        const routes: Route[] = await this.repo.getSaved(user);
        return routes.map(r => r.code);
    }

    public async insert(routes: Route[]): Promise<void>{
        this.repo.insert(routes);
    }

    public async insertStopCodes(codes: string[], stopCode: string): Promise<void>{
        this.repo.insertStops(codes, stopCode);
    }

}
