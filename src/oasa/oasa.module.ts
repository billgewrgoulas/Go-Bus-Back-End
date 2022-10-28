import { Module } from '@nestjs/common';
import { OasaController } from './oasa.controller';
import { OasaService } from './oasa.service';
import { HttpModule } from '@nestjs/axios';
import { OasaGateWay } from './oasa.gateway';

@Module({
  imports: [HttpModule],
  controllers: [OasaController],
  providers: [OasaService, OasaGateWay],
  exports: [OasaService]
})
export class OasaModule {}
