import { Injectable } from '@nestjs/common';
import { Point } from '../entities/point.entity';
import { PointRepository } from '../../repositories/point.repository';
import { RouteStopRepository } from 'src/repositories/routeStop.repository';
import { RouteStop } from '../entities/routeStops.entity';

@Injectable()
export class RouteStopService {

    constructor(private repo: RouteStopRepository) {}

    public async insert(rs: RouteStop[]): Promise<void>{
        return this.repo.insert(rs);
    }

}
