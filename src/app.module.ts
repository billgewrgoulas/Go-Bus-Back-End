import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DBconnectionProperties } from './configurations/config';
import { TransitModule } from './transit/transit.module';
import { TransitGateWay } from './socketsIO/transit.gateway';

@Module({
  imports: [
    UserModule,
    TransitModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      useFactory: () => (DBconnectionProperties)
    }),
  ],
  controllers: [],
  providers: [TransitGateWay],
})
export class AppModule {
  
}
