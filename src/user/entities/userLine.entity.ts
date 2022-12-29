import { Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserLine{

    @PrimaryGeneratedColumn({type: 'bigint'})
    public id: number;

    @Index({unique: false})
    @Column({type: 'varchar'})
    public user_id: string;

    @Index({unique: false})
    @Column({type: 'bigint'})
    public line_id: number;

}