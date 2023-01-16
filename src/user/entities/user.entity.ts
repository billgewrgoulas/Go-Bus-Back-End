
import { IsNotEmpty, MinLength } from 'class-validator';
import { Line } from 'src/transit/entities/line.entity';
import { Stop } from 'src/transit/entities/stop.entity';
import { Booking } from 'src/transit/entities/tripStatus';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, Index, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class User {

  @Index()
  @PrimaryGeneratedColumn({type: 'bigint', name: 'user_id'})
  public user_id: number;

  @Index({unique: true})
  @PrimaryColumn({nullable: false, type: 'varchar', unique: true})
  @IsNotEmpty()
  @MinLength(5)
  public email: string;
  
  @IsNotEmpty()
  @MinLength(3)
  @Column({nullable: false, type: 'varchar'})
  public password: string;

  @IsNotEmpty()
  @MinLength(2)
  @Column({nullable: false, type: 'varchar'})
  public name: string;

}