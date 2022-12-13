import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserRepository } from 'src/repositories/user.repository';
import { UserController } from './controllers/user.controller';
import { TransitModule } from 'src/transit/transit.module';


@Module({
    imports: [TypeOrmModule.forFeature([User]), TransitModule],
    providers: [UserService, UserRepository],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {}
