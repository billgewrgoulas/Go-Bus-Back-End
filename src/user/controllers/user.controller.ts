
import {Body,Controller,Get,Post,UseGuards,UsePipes,ValidationPipe,Request,Header} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from '../entities/user.entity';

    
@Controller('user')
export class UserController {

    constructor(private auth: AuthService) {}
    
    @Post('register')
    @UsePipes(ValidationPipe)
    public async createUser(@Body() data: User): Promise<any> {
        return this.auth.register(data);
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