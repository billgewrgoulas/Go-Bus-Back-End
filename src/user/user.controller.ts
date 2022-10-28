
import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

    
@Controller('users')
export class UsersController {

    constructor(private userService: UserService) {}
      
    @Get()
    public getUsers() {
        return this.userService.getUsers();
    }
      
    @Get('id/:id')
    public findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
    }
      
    @Post('create')
    @UsePipes(ValidationPipe)
    public createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
}