import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/user.entity';
import { UsersController } from './user.controller';
import { UserService } from './user.service';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UsersController]
})
export class UserModule {}
