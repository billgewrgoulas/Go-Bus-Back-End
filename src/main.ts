import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const protobuf = require('protobufjs');
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const fs = require('fs');
const request = require('request');


var requestSettings = {
  method: 'GET',
  url: 'https://cdn.mbta.com/realtime/TripUpdates.pb',
  encoding: null
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //test();
  await app.listen(3000);
}
bootstrap();

function test(){
  request(requestSettings, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);
      let i = 0;
      console.log(feed);
      feed.entity.forEach(function(entity) {
        if (i == 0) {
          console.log(entity);
          i++;
        }
      });
    }
  });
}