import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Trip, TripStatus } from "src/transit/entities/tripStatus";
import { Repository, UpdateResult } from "typeorm";
import { IGenericRepository } from "./generic.repository";

@Injectable()
export class TripStatusRepository extends IGenericRepository<TripStatus>{

    public constructor(@InjectRepository(TripStatus) repo: Repository<TripStatus>){
        super(repo);
    }

    public updateOccupation(trip_id: number, value: number){
        const spec: any = {trip_id: trip_id};
        const update: any = {occupied: () => `occupied + ${value}`};
        super.updateOne(spec, update);
    }

    public override getOne(trip_id: number): Promise<TripStatus | void> {
        return super.getOne({trip_id: trip_id});
    }

    public override insert(data: TripStatus[]): Promise<void | UpdateResult> {
        return super.insert(data);
    }

    public override async get(trip_ids: number[]): Promise<TripStatus[]>{
        return this.entityRepository
            .createQueryBuilder()
            .select(['*'])
            .where("trip_id IN (:...ids)", { ids: trip_ids })
            .execute()
            .catch(e => console.log(e));
    }

}