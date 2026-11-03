import { Module } from '@nestjs/common';
import { EstadoPaqueteService } from './estado-paquete.service.js';
import { EstadoPaqueteController } from './estado-paquete.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
@Module({
  imports: [PrismaModule],
  providers: [EstadoPaqueteService],
  controllers: [EstadoPaqueteController]
})
export class EstadoPaqueteModule {}
