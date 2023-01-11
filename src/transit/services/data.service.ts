import { Injectable } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { LineService } from "./line.service";
import { PointService } from "./points.service";
import { RouteService } from "./routes.service";
import { ScheduleService } from "./schedule.service";
import { StopService } from "./stop.service";
import { TripService } from "./trip.service";
import { OTPService } from "./otp.service";
import { RouteStopService } from "./routeStop.service";
import { NewSchedule } from "../entities/newSchedule.entity";
import { NewScheduleService } from "./newSchedule.service";
import { Repository } from "typeorm";
import { LiveDataRepository } from "src/repositories/liveData.repository";

@Injectable()
export class DataService{

    constructor(
        private linesService: LineService,
        private routesService: RouteService,
        private stopsService: StopService,
        private schSerivce: ScheduleService,
        private pointService: PointService,
        private bookingService: BookingService,
        private tripService: TripService,
        private otpService: OTPService,
        private rsService: RouteStopService,
        public ns: NewScheduleService,
        public live: LiveDataRepository
    ){}

    public get lines(): LineService{
        return this.linesService;
    }

    public get routes(): RouteService{
        return this.routesService;
    }

    public get stops(): StopService{
        return this.stopsService;
    }

    public get schedule(): ScheduleService{
        return this.schSerivce;
    }

    public get points(): PointService{
        return this.pointService;
    }

    public get booking(): BookingService{
        return this.bookingService;
    }

    public get trips(): TripService{
        return this.tripService;
    }

    public get otp(): OTPService{
        return this.otpService;
    }

    public get rs(): RouteStopService{
        return this.rsService;
    }

}