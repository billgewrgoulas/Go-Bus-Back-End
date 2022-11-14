import { OnGatewayConnection } from "@nestjs/websockets";
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets/decorators";
import { Server, Socket } from "socket.io";

@WebSocketGateway({cors: {origins: ['http://localhost:4200']}})
export class TransitGateWay implements OnGatewayConnection{

    @WebSocketServer() private server: Server;

    constructor(){
    }

    @SubscribeMessage('update-arrivals')
    public async updateAll(client: Socket, data: any){
        
    }

    @SubscribeMessage('cancel-bus-updates')
    public cancelBusUpdates(client: Socket){
    }

    @SubscribeMessage('start-bus-updates')
    public startBusUpdates(client: Socket, data: any){
    }

    public async sendBusLocations(){

       
    }

    public handleConnection(client: Socket){
        client.join(client.id);
        this.server.to(client.id).emit('accepted', {msg: 'Connection Established'});
    }

    public handleDisconnect(client: Socket){
        client.leave(client.id);
    }
}