import { Module } from '@nestjs/common';
import { DireccionService } from './direccion.service.js';
import { DireccionController } from './direccion.controller.js';

@Module({
  providers: [DireccionService],
  controllers: [DireccionController]
})
export class DireccionModule {}
