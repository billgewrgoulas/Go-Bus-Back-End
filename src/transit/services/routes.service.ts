import { Injectable } from '@nestjs/common';
import { Route } from '../entities/route.entity';
import { RouteRepository } from '../repositories/route.repository';

@Injectable()
export class RouteService {

    constructor(private repo: RouteRepository) {}

    public async getRoutes(): Promise<Route[]>{
        return this.repo.getAll();
    }

    public async getLineRoutes(lineId: string): Promise<Route[]>{
        return this.repo.getRoutesByLineId(lineId);
    }

}
