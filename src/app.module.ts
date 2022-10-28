import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OasaModule } from './oasa/oasa.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DBconnectionProperties } from './configurations/config';
import { TransitModule } from './transit/transit.module';
import { OasaService } from './oasa/oasa.service';

@Module({
  imports: [
    ProductsModule, 
    UserModule,
    TransitModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      useFactory: () => (DBconnectionProperties)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
