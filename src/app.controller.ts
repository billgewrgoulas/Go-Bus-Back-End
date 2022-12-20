
import {Body,Controller,Get,Post,UseGuards,UsePipes,ValidationPipe,Request,Header} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './user/entities/user.entity';
import { UserService } from './user/services/user.service';

    
@Controller()
export class AppController {

    constructor(private userService: UserService, private auth: AuthService) {}
      
    @Post('register')
    @UsePipes(ValidationPipe)
    public async createUser(@Body() data: User): Promise<any> {

        const user: User | void = await this.userService.findUserByEmail(data.email);

        if(user){
            this.auth.throwError('email exists');
        }else{
            this.userService.createUser(data);
            return this.auth.login(data);
        }

    }

    @UseGuards(LocalAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('login')
    @UsePipes(ValidationPipe)
    public async login(@Request() req: any): Promise<any> {
        return this.auth.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    public getProfile(@Request() req: any): Promise<any> {
        return req.user;
    }
    
}