// @Header('Content-Type', 'application/json')
//     @Get('/insert')
//     public async insert(): Promise<any> {

//         const lines: string[] = ['1351', '1352', '1347', '1339'];
//         const trips: number[] = [];
//         let uid: number = 60000;
        
//         for (const line of lines) {
//             const routes: Route[] = await this.data.routes.getLineRoutes(line);
//             const bookings: Booking[] = [];
//             for (const route of routes) {
//                 const schedules: Schedule[] = await this.data.schedule.getByTime(this.getRand([1, 2, 3, 4, 5]), route.code, 7, 23);
                
//                 if(schedules.length == 0){
//                     continue;
//                 }

//                 const stops: Stop[] = await this.data.stops.getRouteStops(route.code);
//                 for (let i = 0; i < 30; i++) {

//                     let sch: Schedule = this.getRand(schedules);
//                     let k = this.r(0, stops.length);
//                     let l = this.r(0, stops.length);

//                     while(Math.abs(k - l) < 4){
//                         k = this.r(0, stops.length);
//                         l = this.r(0, stops.length);
//                     }

//                     if(l < k){
//                         let t = k;
//                         k = l;
//                         l = t;
//                     }

//                     const s = stops[k].code;
//                     const e = stops[l].code;
//                     const codes = stops.slice(k, l).map(s => s.code);
//                     let time:string = '';
//                     const start = schedules.find((v) => v.stopCode == s);
//                     if(start){
//                         time = start.tripTime;
//                     }else{
//                         continue;
//                     }
//                     const booking: Booking = this.createBooking(uid+'', s, e, sch.trip_id, time, route.code, codes);
//                     await this.data.booking.insertBooking([booking]);
//                     uid++;
//                     //console.log(uid);
//                 }
//             }
//         }

//         console.log(uid);
//         return trips;
//     }

//     private createBooking(uid: string, s: string, e: string, trip_id: number, time: string, r: string, codes: string[]): Booking{
//         return {
//             user_id: uid,
//             trip_id: trip_id,
//             start: '-',
//             end: '-',
//             slug: '-',
//             startStop: s,
//             endStop: e,
//             travel: time,
//             route: r,
//             stopCodes: codes
//         };
//     }

//     private getRand(arr: any[]){
//         return arr[Math.floor(Math.random() * arr.length)];
//     }

//     private r(min: number, max: number) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min) + min);
//     }