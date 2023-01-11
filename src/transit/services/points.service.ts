import { Injectable } from '@nestjs/common';
import { Point } from '../entities/point.entity';
import { PointRepository } from '../../repositories/point.repository';

@Injectable()
export class PointService {

    constructor(private repo: PointRepository) {}

    public async getRoutePoints(routeCode: string): Promise<Point[]>{
        return this.repo.get(routeCode);
    }

    public async insert(points: Point[]): Promise<void>{
        return this.repo.insert(points);
    }

}
