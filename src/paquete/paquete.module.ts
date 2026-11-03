import { Module } from '@nestjs/common';
import { PaqueteService } from './paquete.service.js';
import { PaqueteController } from './paquete.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [PaqueteService],
  controllers: [PaqueteController]
})
export class PaqueteModule {}
