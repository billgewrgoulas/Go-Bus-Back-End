
import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserStop{

    @PrimaryGeneratedColumn({type: 'bigint'})
    public id: number;

    @Index({unique: false})
    @PrimaryColumn({type: 'varchar'})
    public user_id: string;

    @Index({unique: false})
    @PrimaryColumn({type: 'varchar'})
    public stop_code: string;

}