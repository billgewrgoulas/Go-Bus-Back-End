import {Controller,Post,Header,UseGuards,Request, Get, Param} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SavedService } from '../services/saved.service';
import { Stop } from 'src/transit/entities/stop.entity';
import { Route } from 'src/transit/entities/route.entity';

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
        return this.saved.deleteStop(code, req.user.email);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/saveRoute/:code')
    public async addRoute(@Request() req: any, @Param('code') code: string): Promise<any> {
        return this.saved.insertRoute(req.user.email, code);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/deleteRoute/:code')
    public async deleteLine(@Request() req: any, @Param('code') code: string): Promise<any> {
        return this.saved.deleteRoute(req.user.email, code);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/getStops')
    public async getGetRoutes(@Request() req: any): Promise<string[]> {
        return this.saved.getStops(req.user.email);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/getRoutes')
    public async getRoutes(@Request() req: any): Promise<string[]> {
        return this.saved.getRoutes(req.user.email);
    }

    @UseGuards(JwtAuthGuard)
    @Header('Content-Type', 'application/json')
    @Get('/getSavedInfo')
    public async getSavedInfo(@Request() req: any): Promise<{routes: Route[], stops: Stop[]}> {
        return this.saved.getInfo(req.user.email);
    }

}