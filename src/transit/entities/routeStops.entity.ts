import { Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class RouteStop{

    @PrimaryGeneratedColumn({type: 'bigint'})
    public id: number;

    @Index({unique: false})
    @Column({type: 'varchar'})
    public stopCode: string;

    @Index({unique: false})
    @Column({type: 'varchar'})
    public routeCode: string;

}