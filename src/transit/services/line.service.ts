import { Injectable } from '@nestjs/common';
import { Line } from '../entities/line.entity';
import { LineRepository } from '../../repositories/line.repository';

@Injectable()
export class LineService {

    constructor(private repo: LineRepository) {}

    public async getLines(): Promise<Line[]>{
        return this.repo.getAll();
    }

    public async insert(lines: Line[]): Promise<void>{
        this.repo.insert(lines);
    }

}
