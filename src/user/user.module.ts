import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { BookingsController } from './controllers/bookings.controller';
import { TransitModule } from 'src/transit/transit.module';
import { TransitGateWay } from 'src/socketsIO/transit.gateway';
import { UserStop } from './entities/userStop.entity';
import { SavedService } from './services/saved.service';
import { SavedController } from './controllers/saved.controller';
import { UserRoute } from './entities/userRoute.entity';
import { BookingService } from './services/booking.service';
import { BookingRepository } from 'src/repositories/booking.repository';
import { Booking } from './entities/booking.entity';
import { UserController } from './controllers/user.controller';
import { AuthModule } from 'src/auth/auth.module';


@Module({
    imports: [TypeOrmModule.forFeature([User, UserRoute, UserStop, Booking]), TransitModule, AuthModule],
    providers: [ UserRepository, SavedService, BookingService, BookingRepository],
    controllers: [BookingsController, SavedController, UserController],
    exports: []
})
export class UserModule {}
