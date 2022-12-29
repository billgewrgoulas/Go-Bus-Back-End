import { OnGatewayConnection } from "@nestjs/websockets";
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets/decorators";
import { Server, Socket } from "socket.io";

@WebSocketGateway({cors: {origins: ['http://localhost:4200']}})
export class TransitGateWay implements OnGatewayConnection{

    @WebSocketServer() private server: Server;

    constructor(){}

    public updateOccupancy(value: number, trip_ids: number[]){
        this.server.emit('update', {value: value, trip_ids: trip_ids});
    }

    public handleConnection(client: Socket){
        client.join(client.id);
        this.server.to(client.id).emit('accepted', {msg: 'Connection Established'});
    }

    public handleDisconnect(client: Socket){
        client.leave(client.id);
    }
}