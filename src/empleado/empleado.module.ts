import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service.js';
import { EmpleadoController } from './empleado.controller.js';

@Module({
  providers: [EmpleadoService],
  controllers: [EmpleadoController]
})
export class EmpleadoModule {}
