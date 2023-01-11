import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserRepository } from 'src/repositories/user.repository';
import { BookingsController } from './controllers/bookings.controller';
import { TransitModule } from 'src/transit/transit.module';
import { TransitGateWay } from 'src/socketsIO/transit.gateway';
import { UserStop } from './entities/userStop.entity';
import { SavedService } from './services/saved.service';
import { SavedController } from './controllers/saved.controller';
import { UserRoute } from './entities/userRoute.entity';


@Module({
    imports: [TypeOrmModule.forFeature([User, UserRoute, UserStop]), TransitModule],
    providers: [UserService, UserRepository, TransitGateWay, SavedService],
    controllers: [BookingsController, SavedController],
    exports: [UserService]
})
export class UserModule {}
