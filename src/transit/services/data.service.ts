import { Injectable } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { LineService } from "./line.service";
import { PointService } from "./points.service";
import { RouteService } from "./routes.service";
import { ScheduleService } from "./schedule.service";
import { StopService } from "./stop.service";
import { TripService } from "./trip.service";
import { TripStatusService } from "./tripStatus.service";

@Injectable()
export class DataService{

    constructor(
        private linesService: LineService,
        private routesService: RouteService,
        private stopsSerrvice: StopService,
        private schSerivce: ScheduleService,
        private pointService: PointService,
        private bookingService: BookingService,
        private tripService: TripService,
        private tripStatusService: TripStatusService
    ){}

    public get lines(): LineService{
        return this.linesService;
    }

    public get routes(): RouteService{
        return this.routesService;
    }

    public get stops(): StopService{
        return this.stopsSerrvice;
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

    public get tripStatus(): TripStatusService{
        return this.tripStatusService;
    }

}