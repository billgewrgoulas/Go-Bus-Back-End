import {Controller,Post,Header,UseGuards,Request, Get, Delete, Param} from '@nestjs/common';
import { DataService } from 'src/transit/services/data.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Plan } from 'src/transit/transitDtos/itinerary.dto';
import { Booking } from 'src/transit/entities/tripStatus';
import { SavedService } from '../services/saved.service';
import { UserStop } from '../entities/userStop.entity';
import { UserLine } from '../entities/userLine.entity';

@Controller('saved')
export class SavedController {

    constructor(private saved: SavedService) {}

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/saveStop/:code')
    public async addStop(@Request() req: any, @Param('code') code: string): Promise<any> {
        return this.saved.insertStop(code, req.user.email);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/deleteStop/:code')
    public async deleteBooking(@Request() req: any, @Param('code') code: string): Promise<any> {
        console.log(code);
        return this.saved.deleteStop(code, req.user.email);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/addLine/:id')
    public async addLine(@Request() req: any, @Param('id') id: number): Promise<any> {
        return this.saved.insertLine(req.user.email, id);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/deleteLine/:id')
    public async deleteLine(@Request() req: any, @Param('id') id: number): Promise<any> {
        return this.saved.deleteLine(req.user.email, id);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/getStops')
    public async getStops(@Request() req: any): Promise<string[]> {
        return this.saved.getStops(req.user.email);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Post('/getLines')
    public async getLines(@Request() req: any): Promise<UserLine[]> {
        return this.saved.getLines(req.user.email);
    }
 
}