var polyline = require( 'google-polyline' );

export class Step{

    public distance: number;
    public relativeDirection: string;
    public streetName: string;
    public absoluteDirection: string;
    public exit: string;
    public lon: number;
    public lat: number;

    constructor(step: Step){
        this.distance = Math.floor(step.distance);
        this.relativeDirection = step.relativeDirection;
        this.streetName = step.streetName;
        this.absoluteDirection = step.absoluteDirection;
        this.exit = step.exit;
        this.lon = step.lon;
        this.lat = step.lat;
    }

}

export class Vertex{

    public name: string;
    public lon: string;
    public lat: string;
    public vertexType: string;
    public departure: string;
    public arrival: string;
    public stopCode?: string;
    public stopId?: string;
    public stopIndex: number;
    public stopSequence: number;

    constructor(v: Vertex){
        this.name = v.name;
        this.lon = v.lon;
        this.lat = v.lat;
        this.vertexType = v.vertexType;
        this.stopCode = v.stopCode;
        this.stopId = v.stopCode;
        this.stopIndex = v.stopIndex;
        this.stopSequence = v.stopSequence;
        this.arrival = this.edit(+v.arrival);
        this.departure = this.edit(+v.departure);
    }

    private edit(time: number): string{
        const date: Date = new Date(time);
        let hours: string = date.getHours().toString();
        let minutes: string = date.getMinutes().toString();

        if(+hours < 10){
            hours = '0' + hours;
        }

        if(+minutes < 10){
            minutes = '0' + minutes;
        }

        return hours + ':' + minutes;
    }

}

export class Leg{

    public points: string[];
    public duration: number;
    public transitTime: number;
    public mode: string;
    public steps: Step[];
    public routeId: string | undefined;
    public tripId: string | undefined;
    public serviceDate: string;
    public agencyName: string;
    public agencyTimeZoneOffset: number;
    public startTime: string;
    public endTime: string;
    public distance: number;
    public departureDelay: number;
    public arrivalDelay: number;
    public routeShortName: string;
    public from: Vertex;
    public to: Vertex;
    public intermediateStops: Vertex[] = [];
    public legGeometry: any;
    public flex: number;
    public occupancyStatus: number;

    constructor(leg: Leg, steps: Step[], from: Vertex, to: Vertex, stops: Vertex[], points: string){
        this.points = polyline.decode(points);
        this.duration = Math.floor(leg.duration/60);
        this.transitTime = Math.floor(leg.transitTime/60);
        this.mode = leg.mode;
        this.routeId = this.setRoute(leg.routeId);
        this.tripId = this.setTrip(leg.tripId);
        this.serviceDate = leg.serviceDate;
        this.agencyName = leg.agencyName;
        this.agencyTimeZoneOffset = leg.agencyTimeZoneOffset;
        this.startTime = this.edit(+leg.startTime);
        this.endTime = this.edit(+leg.endTime);
        this.distance = Math.floor(leg.distance);
        this.arrivalDelay = Math.floor(leg.arrivalDelay/60);
        this.routeShortName = leg.routeShortName;
        this.steps = steps;
        this.from = from;
        this.to = to;
        this.departureDelay = Math.floor(leg.departureDelay/60);
        this.intermediateStops = stops;
    }

    public setRoute(route: string){
        if(route){
            return route.split(":")[1];
        }else{
            return undefined;
        }
    }

    public setTrip(trip_id: string | undefined){
        if(trip_id){
            return trip_id.split(":")[1];
        }else{
            return undefined;
        }
    }

    private edit(time: number): string{
        const date: Date = new Date(time);
        let hours: string = date.getHours().toString();
        let minutes: string = date.getMinutes().toString();

        if(+hours < 10){
            hours = '0' + hours;
        }

        if(+minutes < 10){
            minutes = '0' + minutes;
        }

        return hours + ':' + minutes;
    }

    public setFlexGrow(totalDuration: number){
        this.flex = Math.floor(this.duration/totalDuration * 10);
    }

}

export class Itinerary{

    public duration: number;
    public startTime: string;
    public endTime: string;
    public walkTime: number;
    public transitTime: number;
    public waitingTime: number;
    public walkDistance: number;
    public arrivalDelay: number;
    public departureDelay: number;
    public serviceDate: string;
    public legs: Leg[];

    constructor(it: Itinerary, legs: Leg[]){
        this.duration = Math.floor(it.duration/60);
        this.transitTime = Math.floor(it.transitTime/60);
        this.waitingTime = Math.floor(it.waitingTime/60);
        this.walkDistance = Math.floor(it.walkDistance);
        this.legs = legs;
        this.startTime = this.edit(+it.startTime);
        this.endTime = this.edit(+it.endTime);
        this.walkTime = Math.floor(it.walkTime/60);
        this.arrivalDelay = it.arrivalDelay;
        this.departureDelay = it.departureDelay;
    }

    private edit(time: number): string{
        const date: Date = new Date(time);
        let hours: string = date.getHours().toString();
        let minutes: string = date.getMinutes().toString();

        if(+hours < 10){
            hours = '0' + hours;
        }

        if(+minutes < 10){
            minutes = '0' + minutes;
        }

        this.serviceDate = date.toLocaleDateString();
        return hours + ':' + minutes;
    }
}

export class Plan{

    public date: string;
    public from: Vertex;
    public to: Vertex;
    public arriveBy: string;
    public itineraries: Itinerary[];
    public slug: string;
    public occupancy: any;

    constructor(plan: Plan, it: Itinerary[], slug: string){
        this.date = new Date(plan.date).toLocaleString();
        this.from = new Vertex(plan.from);
        this.to = new Vertex(plan.to);
        this.itineraries = it;
        this.slug = slug;
    }

}