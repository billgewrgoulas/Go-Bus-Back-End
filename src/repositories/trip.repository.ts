import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Trip } from "src/transit/entities/trip.entity";
import { DataSource, Repository, UpdateResult } from "typeorm";
import { IGenericRepository } from "./generic.repository";

@Injectable()
export class TripRepository extends IGenericRepository<Trip>{

    public constructor(@InjectRepository(Trip) tripRepo: Repository<Trip>, @InjectDataSource() dataSource: DataSource){
        super(tripRepo, dataSource);
    }

    public async updateEmbarkation(trip_id: number, stopCode: string, value: number): Promise<any>{
        const spec: any = {trip_id: trip_id, stopCode: stopCode};
        const update: any = {embarkation: () => `embarkation + ${value}`};
        return super.updateOne(spec, update);
    }

    public async updateDebarkation(trip_id: number, stopCode: string, value: number): Promise<any>{
        const spec: any = {trip_id: trip_id, stopCode: stopCode};
        const update: any = {debarkation: () => `debarkation + ${value}`};
        return super.updateOne(spec, update);
    }

    public getTrip(trip_id: number): Promise<Trip[]> {
        return super.get({trip_id: trip_id});
    }

    public override async insert(data: Trip[]): Promise<void> {
        super.insert(data);
    }

    public getStatus(trip_id: number, stop: string): Promise<Trip | void>{
        return super.getOne({trip_id: trip_id, stopCode: stop});
    }

    public async getOccupation(trip_ids: number[], stopCodes: string[]): Promise<Trip[]>{

        let query: string = ''

        for(let i = 0; i < trip_ids.length; i++){

            if(i == trip_ids.length - 1){
                query = query.concat(`
                    SELECT *
                    FROM transit_data."trip" AS t
                    WHERE t."trip_id"=${trip_ids[i]} AND t."stopCode"='${stopCodes[i]}'
                `);
            }else{
                query = query.concat(`
                    SELECT *
                    FROM transit_data."trip" AS t
                    WHERE t."trip_id"=${trip_ids[i]} AND t."stopCode"='${stopCodes[i]}'
                    UNION
                `);
            }

        }

        return this.db.query(query).catch(e => console.log(e));
    }

    public async updateOccupation(stopCodes: string[], value: number, trip_id: number): Promise<any>{
        return this.entityRepository
            .createQueryBuilder()
            .update()
            .set({occupied: () => `occupied + ${value}`})
            .where('"stopCode" IN (:...codes)', {codes: stopCodes})
            .andWhere({trip_id: trip_id})
            .execute()
            .catch(e => console.log(e));
    }

    public async getMaxOccupation(stops: string[], trip_id: number): Promise<Trip[]>{
        return this.entityRepository
            .createQueryBuilder()
            .select(['*'])
            .where('"stopCode" IN (:...codes)', {codes: stops})
            .andWhere({trip_id: trip_id})
            .orderBy('occupied', 'DESC')
            .limit(1)
            .execute()
            .catch(e => console.log(e));
    }

    public async get(trip_id: number): Promise<Trip[]>{
        return this.db.query(`
            SELECT * 
            FROM transit_data.trip AS trip
            WHERE trip."trip_id"='${trip_id}'
            ORDER BY trip."id" ASC;
        `).catch(e => console.log(e));
    }

    public async getByDate(routeCode: string, day: number, stopCode: string): Promise<Trip[]> {
        return this.db.query(`
            SELECT *
            FROM transit_data.trip AS t
            WHERE t."day"=${day} AND t."routeCode"='${routeCode}' AND t."stopCode"='${stopCode}'
        `).catch(e => console.log(e));
    }

}