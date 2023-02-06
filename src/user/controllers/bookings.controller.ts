import {Controller,Post,Header,UseGuards,Request, Get, Delete} from '@nestjs/common';
import { DataService } from 'src/transit/services/data.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Plan } from 'src/transit/transitDtos/itinerary.dto';
import { BookingService } from '../services/booking.service';
import { Booking } from '../entities/booking.entity';


@Controller('bookings')
export class BookingsController {

    constructor(private data: DataService, private bookings: BookingService) {}

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/new')
    public async newBooking(@Request() req: any): Promise<any> {
        return this.bookings.insertBooking(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/delete')
    public async deleteBooking(@Request() req: any): Promise<any> {
        return this.bookings.deleteBooking(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/get')
    public async getBookings(@Request() req: any): Promise<Booking[]> {
        return this.bookings.getBookings(req.user.user_id);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/getPlan')
    public async getBookingPlan(@Request() req: any): Promise<Plan> {
        return this.data.otp.getBookingPlan(req.body.data);
    }

}