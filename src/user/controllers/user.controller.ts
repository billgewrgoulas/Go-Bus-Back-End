
import {
    Body,
    Controller,
    Post,
    Header
    } from '@nestjs/common';
import { DataService } from 'src/transit/services/data.service';
import { UserService } from '../services/user.service';


@Controller('bookings')
export class UserController {

    constructor(private data: DataService) {}

    @Header('Content-Type', 'application/json')
    @Post('/new')
    public async login(@Body() data: any): Promise<any> {
        this.data.booking.insertBooking(data);
        return {msg: 'ok'};
    }

}