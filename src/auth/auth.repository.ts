import { Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { DataSource } from "typeorm";
import { IGenericRepository } from "../repositories/generic.repository";

@Injectable()
export class AuthRepository extends IGenericRepository<User>{

    constructor(@InjectDataSource() db: DataSource){
        super(undefined, db);
    }

    public async getUser(email: string): Promise<User | void> {
        return this.db.getRepository(User).findOne({where: {email: email}}).catch(e => console.log(e));
    }

    public async createUser(data: User): Promise<User | void> {
        return this.db.getRepository(User).save(data).catch(e => console.log(e));
    }

}