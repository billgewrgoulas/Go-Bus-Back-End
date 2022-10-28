import { User } from 'src/typeorm/user.entity';
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

    @OneToMany(() => Route, (route: Route): Line => route.line)
    public routes: Route[];

}