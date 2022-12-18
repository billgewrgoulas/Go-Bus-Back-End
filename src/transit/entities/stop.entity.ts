import { Column, Entity, PrimaryColumn, Index, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class Stop{

    @Column({nullable: false, type: 'bigint'})
    public id: number;

    @Index({unique: true})
    @PrimaryColumn({nullable: false, type: 'varchar'})
    public code: string;

    @Column({nullable: true, type: 'varchar'})
    public latitude: string;

    @Column({nullable: true, type: 'varchar'})
    public longitude: string;

    @Column({nullable: true, type: 'varchar'})
    public desc_eng: string;

    @Column({nullable: false, type: 'varchar'})
    public desc: string;

    @Column('simple-array', {nullable: true})
    public lines: string[];

}