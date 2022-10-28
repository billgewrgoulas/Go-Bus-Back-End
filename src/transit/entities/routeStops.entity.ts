import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class RouteStop{

    @PrimaryGeneratedColumn({type: 'bigint'})
    public id: number;

    @Column({type: 'varchar'})
    public stopCode: string;

    @Column({type: 'varchar'})
    public routeCode: string;

}