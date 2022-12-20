import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository, UpdateResult } from "typeorm";
import { Line } from "../transit/entities/line.entity";
import { IGenericRepository } from "./generic.repository";

@Injectable()
export class UserRepository extends IGenericRepository<User>{

    public constructor(@InjectRepository(User) userRepo: Repository<User>){
        super(userRepo);
    }

    public override getOne(email: string): Promise<User | void> {
        return super.getOne({email: email});
    }

    public override insertOne(data: User) {
        return super.insertOne(data);
    }
    
}