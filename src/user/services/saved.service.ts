import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from '../entities/user.entity';
import { UserStop } from '../entities/userStop.entity';

@Injectable()
export class SavedService {

    constructor(private repo: UserRepository) {}

    public insertStop(code: string, user: string){
        this.repo.insertStop(code, user);
    }

    public insertLine(user: string, id: number){
        this.repo.insertLine(id, user);
    }

    public deleteLine(user: string, id: number){
        this.repo.deleteLine(id, user);
    }

    public deleteStop(code: string, user: string){
        this.repo.deleteStop(code, user);
    }

    public getStops(user: string): Promise<string[]>{
        return this.repo.getAllStops(user);
    }

    public getLines(user: string){
        return this.repo.getAllLines(user);
    }

}
