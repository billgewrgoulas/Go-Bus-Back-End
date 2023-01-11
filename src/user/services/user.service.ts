import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from '../entities/user.entity';
import { UserStop } from '../entities/userStop.entity';

@Injectable()
export class UserService {

    constructor(private repo: UserRepository) {}

    public createUser(user: User) {
        this.repo.insertOne(user);
    }
         
    public findUserByEmail(email: string): Promise<User | void> {
        return this.repo.getOne(email);
    }

    public insertStop(code: string, user: string){
        this.repo.insertStop(code, user);
    }

    public insertRoute(user: string, code: string){
        this.repo.insertRoute(code, user);
    }

    public deleteLine(user: string, code: string){
        this.repo.deleteRoute(code, user);
    }

    public deleteStop(code: string, user: string){
        this.repo.deleteStop(code, user);
    }

    public getStops(user: string): Promise<string[]>{
        return this.repo.getAllStops(user);
    }

    public getLines(user: string){
        return this.repo.getAllRoutes(user);
    }

}
