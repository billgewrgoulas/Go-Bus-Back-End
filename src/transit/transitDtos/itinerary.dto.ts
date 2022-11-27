var polyline = require( 'google-polyline' );

export class Step{

    public distance: number;
    public relativeDirection: string;
    public streetName: string;
    public absoluteDirection: string;
    public lon: number;
    public lat: number;

    constructor(step: Step){
        this.distance = step.distance;
        this.relativeDirection = step.relativeDirection;
        this.streetName = step.streetName;
        this.absoluteDirection = step.absoluteDirection;
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
        this.arrival = new Date(v.arrival).toLocaleTimeString();
        this.departure = new Date(v.departure).toLocaleTimeString();
    }

}

export class Leg{

    public points: string[];
    public duration: number;
    public mode: string;
    public steps: Step[];
    public routeId: string;
    public tripId: string;
    public serviceDate: string;
    public agencyName: string;
    public agencyTimeZoneOffset: number;
    public startTime: string;
    public endTime: string;
    public distance: string;
    public departureDelay: number;
    public arrivalDelay: number;
    public routeShortName: string;
    public from: Vertex;
    public to: Vertex;
    public intermediateStops: Vertex[];
    public legGeometry: any;
    public flex: number;

    constructor(leg: Leg, steps: Step[], from: Vertex, to: Vertex, stops: Vertex[], points: string){
        this.points = polyline.decode(points);
        this.duration = Math.floor(leg.duration/60);
        this.mode = leg.mode;
        this.routeId = leg.routeId;
        this.tripId = leg.tripId;
        this.serviceDate = leg.serviceDate;
        this.agencyName = leg.agencyName;
        this.agencyTimeZoneOffset = leg.agencyTimeZoneOffset;
        this.startTime = new Date(leg.startTime).toLocaleTimeString();
        this.endTime = new Date(leg.endTime).toLocaleTimeString();
        this.distance = leg.distance;
        this.arrivalDelay = leg.arrivalDelay/60;
        this.routeShortName = leg.routeShortName;
        this.steps = steps;
        this.from = from;
        this.to = to;
        this.departureDelay = leg.departureDelay;
        this.intermediateStops = stops;
    }

    public setFlexGrow(totalDuration: number){
        this.flex = Math.floor(totalDuration/this.duration);
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
    public legs: Leg[];

    constructor(it: Itinerary, legs: Leg[]){
        this.duration = Math.floor(it.duration/60);
        this.transitTime = Math.floor(it.transitTime/60);
        this.waitingTime = Math.floor(it.waitingTime/60);
        this.walkDistance = it.walkDistance;
        this.legs = legs;
        this.startTime = new Date(it.startTime).toLocaleTimeString();
        this.walkTime = Math.floor(it.walkTime/60);
    }
}

export class Plan{

    public date: string;
    public arrival: string;
    public from: Vertex;
    public to: Vertex;
    public totalWalk: number;
    public duration: number;
    public itineraries: Itinerary[];

    constructor(plan: Plan, it: Itinerary[], dur: number, tw: number){
        this.date = new Date(plan.date).toLocaleString();
        this.arrival = it[it.length - 1].endTime;
        this.from = new Vertex(plan.from);
        this.to = new Vertex(plan.to);
        this.itineraries = it;
        this.duration = Math.floor(dur/60);
        this.totalWalk = tw;
    }

}