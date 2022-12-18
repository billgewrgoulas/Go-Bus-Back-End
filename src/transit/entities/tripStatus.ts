
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
    public slug: string;

    @Column({nullable: false, type: 'int'})
    public it: number;

    @ManyToOne(() => User, (user: User) => user.bookings, {
        cascade: true, 
        nullable: false, 
    })
    @JoinColumn({referencedColumnName: 'email', name: 'user_id'})
    public user: User;

    public stopCodes: string[];

}

@Entity()
export class Trip{

    @PrimaryColumn({nullable: false, type: 'bigint'})
    public trip_id: number;

    @PrimaryColumn({nullable: false, type: 'varchar'})
    public stopCode: string;

    @PrimaryColumn({nullable: false, type: 'bigint'})
    public id: number;

    @Column({nullable: false, type: 'varchar'})
    public tripTime: string;

    /* Updates in real time */
    @Column({nullable: false, type: 'bigint'})
    public occupied: number;

    @Column({nullable: false, type: 'bigint'})
    public totalSeats: number;

    @Column({nullable: false, type: 'bigint'})
    public embarkation: number;

    @Column({nullable: false, type: 'bigint'})
    public debarkation: number;

}

@Entity()
export class TripStatus{

    @Index({unique: true})
    @PrimaryColumn({nullable: false, type: 'bigint'})
    public trip_id: number;

    /* Updates in real time */
    @Column({nullable: false, type: 'bigint'})
    public occupied: number;

    @Column({nullable: false, type: 'bigint'})
    public totalSeats: number;

}

