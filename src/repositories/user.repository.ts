import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Line } from "../transit/entities/line.entity";
import { IGenericRepository } from "./generic.repository";
import { UserStop } from "src/user/entities/userStop.entity";
import { use } from "passport";
import { UserLine } from "src/user/entities/userLine.entity";

@Injectable()
export class UserRepository extends IGenericRepository<User>{

    constructor(@InjectRepository(User) userRepo: Repository<User>, @InjectDataSource() db: DataSource){
        super(userRepo, db);
    }

    public override getOne(email: string): Promise<User | void> {
        return super.getOne({email: email});
    }

    public override insertOne(data: User) {
        super.insertOne(data);
    }

    public insertStop(code: string, user_id: string){
        this.db.getRepository(UserStop)
            .insert({user_id: user_id, stop_code: code})
            .catch(e => console.log(e));
    }

    public async getStopCode(code: string, user_id: string): Promise<UserStop | undefined>{
        return this.db.getRepository(UserStop)
            .createQueryBuilder()
            .select(['stop_code'])
            .where({user_id: user_id, stop_code: code})
            .execute()
            .catch(e => console.log(e));
    }

    public insertLine(line_id: number, user_id: string){
        this.db.getRepository(UserLine)
            .insert({user_id: user_id, line_id: line_id})
            .catch(e => console.log(e));
    }

    public deleteStop(code: string, user_id: string){
        this.db.getRepository(UserStop)
            .createQueryBuilder()
            .delete()
            .where({user_id: user_id, stop_code: code})
            .execute()
            .catch(e => console.log(e));
    }

    public deleteLine(line_id: number, user_id: string){
        this.db.getRepository(UserLine)
            .createQueryBuilder()
            .delete()
            .where({user_id: user_id, line_id: line_id})
            .execute()
            .catch(e => console.log(e));
    }

    public async getAllStops(user_id: string): Promise<string[]>{
        const stops: any[] = await this.db.getRepository(UserStop)
            .createQueryBuilder()
            .select(['stop_code'])
            .where({user_id: user_id})
            .execute()
            .catch(e => console.log(e));
        return stops.map(s => s.stop_code);
    }

    public async getAllLines(user_id: string): Promise<UserLine[]>{
        return this.db.getRepository(UserLine)
            .createQueryBuilder()
            .select(['*'])
            .where({user_id: user_id})
            .execute()
            .catch(e => console.log(e));
    }

}