import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';
import { Stop } from './stop.entity';
import { ArrivalDto } from '../transitDtos/arrival.dto';

@Entity()
export class LiveData{

    @Index({unique: true})
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({nullable: false, type: 'int'})
    public departureMins: string;

    @Column({nullable: false, type: 'int'})
    public departureSeconds: number;

    @Column({nullable: false, type: 'int'})
    public arrivalMins: string;

    @Column({nullable: false, type: 'int'})
    public arrivalSeconds: string;

    @Column({nullable: false, type: 'varchar'})
    public lineCode: string;

    @Column({nullable: false, type: 'varchar'})
    public routeCode: string;

    @Column({nullable: false, type: 'varchar'})
    public stopCode: string;

    @Column({nullable: false, type: 'varchar'})
    public vehicleCode: string;

    @Column({nullable: false, type: 'varchar'})
    public stopLat: string;

    @Column({nullable: false, type: 'varchar'})
    public stopLng: string;

    @Column({nullable: false, type: 'varchar'})
    public vehicleLat: string;

    @Column({nullable: false, type: 'varchar'})
    public vehicleLng: string;

    @CreateDateColumn()
    public timeStamp: string;

}