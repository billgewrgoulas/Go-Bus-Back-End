import { Column, Entity, OneToMany, PrimaryColumn, Index, ManyToOne, JoinColumn} from 'typeorm';

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
