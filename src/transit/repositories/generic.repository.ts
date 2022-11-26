import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource, ObjectLiteral, Repository, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export abstract class IGenericRepository<T extends QueryDeepPartialEntity<ObjectLiteral>> {

	protected constructor(
		private readonly entityRepository: Repository<T>, 
		protected readonly db?: DataSource
	){}

	protected async getAll(): Promise<T[]>{
		return this.entityRepository
			.createQueryBuilder()
			.select(['*'])
			.execute()
			.catch(e => console.log(e.detail));
	}

	protected async get(spec: any): Promise<T[]>{
		return this.entityRepository
			.createQueryBuilder()
			.select(['*'])
			.where(spec)
			.execute()
			.catch(e => console.log(e.detail));
	}

	protected async insert(data: T[]): Promise<void | UpdateResult>{
		return this.entityRepository
			.createQueryBuilder()
      		.insert()
      		.values(data)
      		.execute()
      		.catch(e => console.log(e.detail));
	}

}