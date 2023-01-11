import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { DataSource, Repository } from "typeorm";
import { IGenericRepository } from "./generic.repository";
import { UserStop } from "src/user/entities/userStop.entity";
import { UserRoute } from "src/user/entities/userRoute.entity";

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

    public insertRoute(route_code: string, user_id: string){
        this.db.getRepository(UserRoute)
            .insert({user_id: user_id, route_code: route_code})
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

    public deleteRoute(route_code: string, user_id: string){
        this.db.getRepository(UserRoute)
            .createQueryBuilder()
            .delete()
            .where({user_id: user_id, route_code: route_code})
            .execute()
            .catch(e => console.log(e));
    }

    public async getAllStops(user_id: string): Promise<string[]>{
        return (<any[]>await this.db.getRepository(UserStop)
            .createQueryBuilder()
            .select(['stop_code'])
            .where({user_id: user_id})
            .execute()
            .catch(e => console.log(e)))
            .map(s => s.stop_code);
    }

    public async getAllRoutes(user_id: string): Promise<string[]>{
        return (<any[]>await this.db.getRepository(UserRoute)
            .createQueryBuilder()
            .select(['route_code'])
            .where({user_id: user_id})
            .execute()
            .catch(e => console.log(e)))
            .map(r => r.route_code);
    }

}