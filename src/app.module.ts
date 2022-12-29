import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DBconnectionProperties } from './configurations/config';
import { TransitModule } from './transit/transit.module';
import { TransitGateWay } from './socketsIO/transit.gateway';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';



@Module({
  imports: [
    EventEmitterModule.forRoot(),
    AuthModule,
    UserModule,
    TransitModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      useFactory: () => (DBconnectionProperties)
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  
}
