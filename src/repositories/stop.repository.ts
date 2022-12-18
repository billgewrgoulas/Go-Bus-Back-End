import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { Stop } from "../transit/entities/stop.entity";
import { IGenericRepository } from "./generic.repository";
import { Line } from "src/transit/entities/line.entity";

export class StopRepository extends IGenericRepository<Stop>{

    public constructor(@InjectRepository(Stop) stopRepo: Repository<Stop>, @InjectDataSource() dataSource: DataSource){
        super(stopRepo, dataSource);
    }

    public override getAll(): Promise<Stop[]> {
        return super.getAll();
    }

    public async getRouteStops(code: string): Promise<Stop[]>{
        return this.db.query(`
            SELECT "desc", "desc_eng", "code", "latitude", "longitude"
            FROM transit_data.route_stop as rs
            INNER JOIN transit_data.stop as s 
            ON s."code"=rs."stopCode"
            WHERE rs."routeCode"='${code}';
        `).catch(e => console.log(e));
    }

    public async getStopLines(): Promise<any[]>{
        return this.db.query(`
            SELECT DISTINCT s."code", l."name"
            FROM transit_data.stop AS s
            INNER JOIN transit_data.route_stop AS rs
            ON s."code"=rs."stopCode"
            INNER JOIN transit_data.route AS r
            ON r."code"=rs."routeCode"
            INNER JOIN transit_data.line AS l
            ON r."lineId"=l."id"
            ORDER BY s."code";
        `).catch(e => console.log(e));
    }

    public updateStopLines(code: string, lines:string[]){
        super.updateOne({code: code}, {lines: lines});
    }

}