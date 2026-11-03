import { Module } from '@nestjs/common';
import { DireccionService } from './direccion.service.js';
import { DireccionController } from './direccion.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [DireccionService],
  controllers: [DireccionController]
})
export class DireccionModule {}
