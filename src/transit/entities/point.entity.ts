import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import { Route } from './route.entity';

@Entity()
export class Point{

    @PrimaryColumn({type: 'bigint'})
    public id: number;

    @Column({nullable: false, type: 'varchar'})
    public longitude: string;

    @Column({nullable: false, type: 'varchar'})
    public latitude: string;

    @Column({nullable: false, type: 'int'})
    public sequence: number;

    @Index()
    @Column({nullable: false, type: 'varchar'})
    public routeCode: string;

    @ManyToOne(() => Route, (route: Route) => route.points)
    @JoinColumn({name: 'routeCode', referencedColumnName: 'code'})
    public route: Route;

}