
import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe,
    Request,
    Header
    } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
    public async createUser(@Body() data: any) {
        await this.userService.createUser(data.data);
        return this.auth.login(data.data);
    }

    @UseGuards(LocalAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('login')
    public async login(@Request() req): Promise<any> {
        return this.auth.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    public getProfile(@Request() req: any): Promise<any> {
        return req.user;
    }
    
}