
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, Index} from 'typeorm';

@Entity()
export class User {

  @Index()
  @PrimaryGeneratedColumn({
      type: 'bigint',
      name: 'user_id',
  })
  public user_id: number;

  @Column({
    nullable: false,
    default: '',
    type: 'varchar'
  })
  public username: string;

  @Index({unique: true})
  @Column({
    nullable: false,
    default: '',
    type: 'varchar'
  })
  public email: string;
  
  @Column({
    nullable: false,
    default: '',
    type: 'varchar'
  })
  public password: string;
}