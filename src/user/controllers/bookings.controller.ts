import {Controller,Post,Header,UseGuards,Request, Get, Delete} from '@nestjs/common';
import { DataService } from 'src/transit/services/data.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Plan } from 'src/transit/transitDtos/itinerary.dto';
import { Booking } from 'src/transit/entities/tripStatus';
import { Schedule } from 'src/transit/entities/schedule.entity';
import { Route } from 'src/transit/entities/route.entity';
import { Stop } from 'src/transit/entities/stop.entity';
import { Interval, Timeout } from '@nestjs/schedule';


@Controller('bookings')
export class BookingsController {

    constructor(private data: DataService) {}

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/new')
    public async newBooking(@Request() req: any): Promise<any> {
        return this.data.booking.insertBooking(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/delete')
    public async deleteBooking(@Request() req: any): Promise<any> {
        return this.data.booking.deleteBooking(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/get')
    public async getBookings(@Request() req: any): Promise<Booking[]> {
        return this.data.booking.getBookings(req.user.email);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/getPlan')
    public async getBookingPlan(@Request() req: any): Promise<Plan> {
        return this.data.otp.getBookingPlan(req.body.data);
    }

}