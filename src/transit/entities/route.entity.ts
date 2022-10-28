import { User } from 'src/typeorm/user.entity';
import { Column, Entity, OneToMany, PrimaryColumn, Index, ManyToOne, JoinTable, ManyToMany, JoinColumn} from 'typeorm';
import { Line } from './line.entity';
import { Point } from './point.entity';
import { Stop } from './stop.entity';

@Entity()
export class Route{

    @Column({nullable: false, type: 'bigint', unique: true})
    public id: number;

    @Index({unique: true})
    @PrimaryColumn({nullable: false, type: 'varchar'})
    public code: string;

    @Column({nullable: false, type: 'bigint'})
    public lineId: number;

    @Column({nullable: true, type: 'int'})
    public direction: number;

    @Column({nullable: true, type: 'varchar'})
    public desc_eng: string;

    @Column({nullable: true, type: 'varchar'})
    public desc: string;

    @Column('simple-array', {nullable: true})
    public stopCodes: string[];

    @ManyToOne(() => Line, (line: Line) => line.routes, {
        cascade: true, 
        nullable: false, 
    })
    @JoinColumn({referencedColumnName: 'id', name: 'lineId'})
    public line: Line;

    @OneToMany(() => Point, (point: Point) => point.route, {cascade: true})
    public points: Point[];

    // @ManyToMany(() => Stop, {cascade: true})
    // @JoinTable({
    //     name: 'route_stops', 
    //     joinColumn: {name: 'routeCode', referencedColumnName: 'code'}, 
    //     inverseJoinColumn: {name: 'stopCode', referencedColumnName: 'code'}
    // })
    // public stops: Stop[];

}