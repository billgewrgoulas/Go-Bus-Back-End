
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, Index} from 'typeorm';

@Entity()
export class User {

  @Index()
  @PrimaryGeneratedColumn({type: 'bigint', name: 'user_id'})
  public user_id: number;

  @Index({unique: true})
  @Column({nullable: false, type: 'varchar', unique: true})
  public email: string;
  
  @Column({nullable: false, type: 'varchar'})
  public password: string;

}