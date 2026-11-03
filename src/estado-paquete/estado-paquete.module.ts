import { Module } from '@nestjs/common';
import { EstadoPaqueteService } from './estado-paquete.service.js';
import { EstadoPaqueteController } from './estado-paquete.controller.js';

@Module({
  providers: [EstadoPaqueteService],
  controllers: [EstadoPaqueteController]
})
export class EstadoPaqueteModule {}
