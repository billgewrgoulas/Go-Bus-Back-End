import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository, DataSource } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    public createUser(createUserDto: CreateUserDto) {
        // const newUser = this.userRepository.create(createUserDto);
        // return this.userRepository.save(newUser);
    }
         
    public findUsersById(id: number) {
        // return this.userRepository.findOne({where: {user_id: id}});
    }

    public getUsers(){
        // return this.userRepository.find();
    }
}
