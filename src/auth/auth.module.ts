import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { jwtConstants } from 'src/configurations/config';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AuthRepository } from 'src/auth/auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { 
        expiresIn: '7d',
    },
  })],
  providers: [LocalStrategy, JwtStrategy, AuthService, AuthRepository],
  exports: [AuthService]
})
export class AuthModule {}
