import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from 'src/auth/auth.repository';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class AuthService {

  constructor(private authRepo: AuthRepository, private jwtService: JwtService) {}

  public createUser(user: User) {
    this.authRepo.createUser(user);
  }
     
  public findUserByEmail(email: string): Promise<User | void> {
    return this.authRepo.getUser(email);
  }

  public async validateUser(email: string, pass: string): Promise<User | void | any> {
    const user: User | void = await this.authRepo.getUser(email);

    if(user && user.password != pass){
      this.throwError('wrong password');
    }else if(user && user.password === pass){
      return user;
    }

    this.throwError('wrong credentials');
  }

  public login(user: any) {

    if(user.msg){
      return user;
    }

    const payload = { email: user.email, name: user.name, user_id: user.user_id};
    return { access_token: this.jwtService.sign(payload) };
  }

  public async register(user: any){
    const userdb: User | void = await this.authRepo.getUser(user.email);

    if(userdb){
      this.throwError('email exists');
      return;
    }

    const new_user: User | void = await this.authRepo.createUser(user);

    if(new_user){
      return this.login(new_user);
    }else{
      this.throwError('error creating new user');
    }

  }

  public throwError(msg: string){
    throw new HttpException({
      status: HttpStatus.FORBIDDEN, error: msg
    }, HttpStatus.FORBIDDEN);
  }
}