import { Column, Entity, PrimaryColumn, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Schedule{

    @PrimaryGeneratedColumn({type: 'bigint'})
    public id: number;

    @PrimaryColumn({type: 'bigint', nullable: false})
    public trip_id: number;

    @PrimaryColumn({nullable: false, type: 'int'})
    public day: number;

    @Index({unique: false})
    @PrimaryColumn({nullable: false, type: 'varchar'})
    public routeCode: string;

    @Index({unique: false})
    @PrimaryColumn({nullable: false, type: 'varchar'})
    public stopCode: string;

    @Column({nullable: false, type: 'varchar'})
    public line: string;

    @Column({nullable: false, type: 'varchar'})
    public tripTime: string;

    @Column({type: 'int', nullable: false})
    public tripTimeHour: number;

    @Column({type: 'int', nullable: false})
    public tripTimeMinute: number;

}