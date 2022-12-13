import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Stop } from "../transit/entities/stop.entity";
import { IGenericRepository } from "./generic.repository";

export class StopRepository extends IGenericRepository<Stop>{

    public constructor(@InjectRepository(Stop) stopRepo: Repository<Stop>, @InjectDataSource() dataSource: DataSource){
        super(stopRepo, dataSource);
    }

    public override getAll(): Promise<Stop[]> {
        return super.getAll();
    }

    public async getRouteStops(code: string): Promise<Stop[]>{
        return await this.db.query(`
            SELECT "desc", "desc_eng", "code", "latitude", "longitude"
            FROM transit_data.route_stop as rs
            INNER JOIN transit_data.stop as s 
            ON s."code"=rs."stopCode"
            WHERE rs."routeCode"='${code}';
        `).catch(e => console.log(e));
    }

}