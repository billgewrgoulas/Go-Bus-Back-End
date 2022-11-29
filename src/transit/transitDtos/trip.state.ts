
export interface TripState {
    start: string[];
    destination: string[];
    options: string[];
    direction: string;
    time: string;
    date: Date;
    arriveBy: string;
    sortBy: string;
    mode: string;
    strategy: string;
    fetch: boolean;
}

export class OTPParams{

    public fromPlace: string;
    public toPlace: string;
    public time: string;
    public date: string;
    public arriveBy: boolean;
    public mode: string = 'TRANSIT,WALK';
    public maxWalkDistance: string = '4828.032';
    public wheelchair: boolean = false;
    public preferredRoutes: string = '1__16';
    public otherThanPreferredRoutesPenalty: string = '0';
    public showIntermediateStops: boolean = true;
    public debugItineraryFilter: boolean = false;
    public locale: string = 'en';

    public constructor(init: TripState){

        this.fromPlace = `${init.start[2]},${init.start[3]}`;
        this.toPlace = `${init.destination[2]},${init.destination[3]}`;
        this.date = this.apiDateFormat(init.date);
        this.time = init.time;
        this.mode = init.mode;

        if(init.arriveBy == 'depart'){
            this.arriveBy = false;
        }else{
            this.arriveBy = true;
        }

    }
 
    public buildQueryParams(): string{

        const params: string[] = [
            `fromPlace=${this.fromPlace}&`,
            `toPlace=${this.toPlace}&`,
            `time=${this.time}&`,
            `date=${this.date}&`,
            `arriveBy=${this.arriveBy}&`,
            `mode=${this.mode}&`,
            `maxWalkDistance=${this.maxWalkDistance}&`,
            `wheelChair=${this.wheelchair}&`,
            `preferedRoutes=${this.preferredRoutes}&`,
            `otherThanPreferredRoutesPenalty=${this.otherThanPreferredRoutesPenalty}&`,
            `showIntermediateStops=${this.showIntermediateStops}&`,
            `debugItineraryFilter=${this.debugItineraryFilter}&`,
            `locale=${this.locale}`
        ];

        return params.join('');
    }

    private apiDateFormat(date: Date): string{

        let new_date: Date = new Date(date);
        let year = new_date.getFullYear();
        let month = (1 + new_date.getMonth()).toString();
        let day = new_date.getDate().toString();

        month = month.length > 1 ? month : '0' + month;
        day = day.length > 1 ? day : '0' + day;

        return month + '-' + day + '-' + year;
    }

}

