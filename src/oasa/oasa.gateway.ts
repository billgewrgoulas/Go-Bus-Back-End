import { OnGatewayConnection } from "@nestjs/websockets";
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets/decorators";
import { Server, Socket } from "socket.io";
import { OasaService } from "./oasa.service";
import { Store } from "src/mockDB/mock.store";

@WebSocketGateway({cors: {origins: ['http://localhost:4200']}})
export class OasaGateWay implements OnGatewayConnection{

    @WebSocketServer() private server: Server;

    constructor(private oasa: OasaService){
        setInterval(async() => await this.sendBusLocations(), 5000);
    }

    @SubscribeMessage('update-arrivals')
    public async updateAll(client: Socket, data: any){

        
    }

    @SubscribeMessage('cancel-bus-updates')
    public cancelBusUpdates(client: Socket){
        Store.activeRoutes[client.id] = '';
    }

    @SubscribeMessage('start-bus-updates')
    public startBusUpdates(client: Socket, data: any){
        Store.activeRoutes[client.id] = data.routeCode;
    }

    public async sendBusLocations(){

       
    }

    public handleConnection(client: Socket){
        client.join(client.id);
        this.server.to(client.id).emit('accepted', {msg: 'Connection Established'});
    }

    public handleDisconnect(client: Socket){
        client.leave(client.id);
        delete Store.activeRoutes[client.id];
        delete client[client.id];
    }
}