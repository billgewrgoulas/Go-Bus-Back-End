import { Route } from "src/transit/entities/route.entity";
import { RouteRepository } from "src/transit/repositories/route.repository";
import { TripState } from "src/transit/transitDtos/trip.state";
import { Repository } from "typeorm";
import { NavigatorStrategy } from "../navigatorStrategy";

export class SingleRouteStrategy implements NavigatorStrategy<Route>{

    public async buildRoute(tripState: TripState, routeRepo: RouteRepository): Promise<Route[]> {

        const start: string = tripState.start[0];
        const end: string = tripState.destination[0];
        const routes: Route[] = await routeRepo.getRoutesBystops(start, end);
  
        return routes.filter((route: any) => {

            const stops = route.stopCodes.split(',');
            const startIndex = stops.findIndex((v: string) => v == start);
            const endIndex = stops.findIndex((v: string) => v == end);

            if(startIndex < endIndex){
                return true;
            }else{
                return false;
            }

        });

    }

}