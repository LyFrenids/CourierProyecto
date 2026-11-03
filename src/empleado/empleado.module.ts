import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleado.service.js';
import { EmpleadoController } from './empleado.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [EmpleadosService],
  controllers: [EmpleadoController]
})
export class EmpleadoModule {}
