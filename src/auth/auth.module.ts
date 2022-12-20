import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { jwtConstants } from 'src/configurations/config';
import { UserService } from 'src/user/services/user.service';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '36000s' },
  })],
  providers: [LocalStrategy, JwtStrategy, AuthService,],
  exports: [AuthService]
})
export class AuthModule {}
