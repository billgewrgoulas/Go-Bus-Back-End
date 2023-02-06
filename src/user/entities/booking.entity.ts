import { Entity, PrimaryColumn, Column } from "typeorm";

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

    @Column({nullable: true, type: 'varchar'})
    public arrive: string;

    @Column({nullable: true, type: 'varchar'})
    public date: string;

    public stopCodes: string[];

}