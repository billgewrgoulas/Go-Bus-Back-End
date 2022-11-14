import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryColumn, Index, ManyToMany, JoinTable, JoinColumn} from 'typeorm';
import { Route } from './route.entity';

@Entity()
export class Line{

    @Index({unique: true})
    @PrimaryColumn({nullable: false, type: 'bigint'})
    public id: number;

    @Column({nullable: false, type: 'varchar'})
    public name: string;

    @Column({nullable: false, type: 'bigint'})
    public routesNumber: number;

    @Column({nullable: false, type: 'varchar'})
    public desc_eng: string;

    @Column({nullable: false, type: 'varchar'})
    public desc: string;

    @Column({type: 'simple-array', nullable: true})
    public routeCodes: string[];

    @OneToMany(() => Route, (route: Route): Line => route.line)
    public routes: Route[];

}