
import {
    Body,
    Controller,
    Post,
    Header,
    Param
    } from '@nestjs/common';
import { DataService } from 'src/transit/services/data.service';
import { UserService } from '../services/user.service';


@Controller('bookings')
export class UserController {

    constructor(private data: DataService) {}

    @Header('Content-Type', 'application/json')
    @Post('/new')
    public async login(@Body() data: any): Promise<any> {
        return this.data.booking.insertBooking(data);
    }

    @Header('Content-Type', 'application/json')
    @Post('/bookings/:email')
    public async getBookings(@Param() email: string): Promise<any> {
        return this.data.booking.getBookings(email);
    }

}