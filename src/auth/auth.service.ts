import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/services/user.service';


@Injectable()
export class AuthService {

  constructor(private usersService: UserService, private jwtService: JwtService ) {}

  public async validateUser(email: string, pass: string): Promise<User | void | any> {
    const user: User | void = await this.usersService.findUserByEmail(email);

    if(user && user.password != pass){
      this.throwError('wrong password');
    }else if(user && user.password === pass){
      return user;
    }

    this.throwError('wrong credentials')
  }

  public login(user: any) {

    if(user.msg){
      return user;
    }

    const payload = { email: user.email, name: user.name };
    return { access_token: this.jwtService.sign(payload) };
  }

  public throwError(msg: string){
    throw new HttpException({
      status: HttpStatus.FORBIDDEN, error: msg
    }, HttpStatus.FORBIDDEN);
  }
}