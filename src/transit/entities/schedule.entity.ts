import { Column, Entity, OneToMany, PrimaryColumn, Index, ManyToMany, JoinTable, JoinColumn} from 'typeorm';

@Entity()
export class Schedule{

    @PrimaryColumn({nullable: false, type: 'bigint'})
    public id: number;

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