
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryColumn, Index, ManyToOne, JoinColumn} from 'typeorm';


@Entity()
export class Booking{

    @PrimaryColumn({nullable: false, type: 'bigint'})
    public trip_id: number;

    @PrimaryColumn({nullable: false, type: 'varchar'})
    public user_id: string;

    @PrimaryColumn({nullable: false, type: 'varchar'})
    public startStop: string;

    @PrimaryColumn({nullable: false, type: 'varchar'})
    public endStop: string;
    
    @Column({nullable: false, type: 'varchar'})
    public start: string;

    @Column({nullable: false, type: 'varchar'})
    public end: string;

    @Column({nullable: false, type: 'varchar'})
    public route: string;

    @Column({nullable: true, type: 'varchar'})
    public slug: string;

    @Column({nullable: true, type: 'varchar'})
    public travel: string;

    public stopCodes: string[];

}

@Entity()
@Index(['trip_id', 'stopCode'], {unique: false})
export class Trip{

    @PrimaryColumn({nullable: false, type: 'bigint'})
    public trip_id: number;

    @PrimaryColumn({nullable: false, type: 'varchar'})
    public stopCode: string;

    @PrimaryColumn({nullable: false, type: 'bigint'})
    public id: number;

    @Column({nullable: false, type: 'bigint'})
    public occupied: number;

    @Column({nullable: false, type: 'bigint'})
    public totalSeats: number;

    @Column({nullable: false, type: 'bigint'})
    public embarkation: number;

    @Column({nullable: false, type: 'bigint'})
    public debarkation: number;

    @Column({nullable: true, type: 'varchar'})
    public routeCode: string;

    @Column({nullable: true, type: 'varchar'})
    public time: string;

}



