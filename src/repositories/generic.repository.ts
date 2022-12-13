import { DataSource, ObjectLiteral, Repository, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export abstract class IGenericRepository<T extends QueryDeepPartialEntity<ObjectLiteral>> {

	protected constructor(
		protected readonly entityRepository: Repository<T>, 
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
		await this.entityRepository.save(data, {chunk: 1000}).catch(e => console.log(e));
	}

	protected async insertOne(data: T): Promise<void | UpdateResult>{
		this.entityRepository
			.createQueryBuilder()
		  	.insert()
		  	.values(data)
		  	.execute()
		  	.catch(e => console.log(e.detail));
	}

	protected async getOne(spec: any): Promise<T | void>{
		return this.entityRepository
			.createQueryBuilder()
			.where(spec)
			.getOne()
			.catch(e => console.log(e.detail));
	}

	protected async deleteOne(spec: any): Promise<any>{
		this.entityRepository
			.createQueryBuilder()
			.delete()
			.where(spec)
			.execute()
			.catch(e => console.log(e.detail));
	}

	protected async updateOne(spec: any, update: any): Promise<any>{
		this.entityRepository
			.createQueryBuilder()
			.update()
			.set(update)
			.where(spec)
			.execute()
			.catch(e => console.log(e.detail));
	}

}