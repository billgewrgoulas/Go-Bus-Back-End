import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { UpdateResult } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {

    constructor(private repo: UserRepository) {}

    public createUser(user: User): Promise<void | UpdateResult> {
        return this.repo.insertOne(user);
    }
         
    public findUserByEmail(email: string): Promise<User | void> {
        return this.repo.getOne(email);
    }

}
