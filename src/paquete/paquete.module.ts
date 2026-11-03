import { Module } from '@nestjs/common';
import { PaqueteService } from './paquete.service.js';
import { PaqueteController } from './paquete.controller.js';

@Module({
  providers: [PaqueteService],
  controllers: [PaqueteController]
})
export class PaqueteModule {}
