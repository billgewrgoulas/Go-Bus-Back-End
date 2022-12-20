import {Controller,Post,Header,Param, UseGuards,Request, Get} from '@nestjs/common';
import { DataService } from 'src/transit/services/data.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Booking } from 'src/transit/entities/tripStatus';
import { Plan } from 'src/transit/transitDtos/itinerary.dto';


@Controller('bookings')
export class UserController {

    constructor(private data: DataService) {}

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/new')
    public async newBooking(@Request() req: any): Promise<any> {
        return this.data.booking.insertBooking(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/get')
    public async getBookings(@Request() req: any): Promise<any> {
        return this.data.booking.getBookings(req.user.email);
    }

    // @UseGuards(JwtAuthGuard)
    // @Header('Content-Type', 'application/json')
    // @Get('/getInfo')
    // public async getInfo(@Request() req: any): Promise<Plan> {
    //     return this.data.otp.constructPlan(req.body.slug);
    // }

}