
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { EmpleadosService } from './empleado.service.js';
import { CreateEmpleadoDTO } from './DTO/CreateEmpleadoDTO.js';
import { UpdateEmpleadoDTO } from './DTO/UpdateEmpleadoDTO.js';

@Controller('empleados')
export class EmpleadoController {

  constructor(
    private readonly empleadosService: EmpleadosService,
  ) {}

  // Listar todos los empleados
  @Get()
  async listarEmpleados() {
    return this.empleadosService.listarEmpleados();
  }

  // Crear un empleado
  @Post()
  async crearEmpleado(@Body() datosEmpleado: CreateEmpleadoDTO) {
    return this.empleadosService.createEmpleado(datosEmpleado);
  }

  // Buscar empleado por ID
  @Get('buscar-empleado/:id')
  async buscarEmpleadoPorId(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.empleadosService.buscarUnEmpleado(id);
  }

  // Actualizar empleado
  @Put(':id')
  async updateEmpleado(
    @Param('id', ParseIntPipe) id: number,
    @Body() empleado: UpdateEmpleadoDTO,
  ) {
    return this.empleadosService.updateEmpleado(id, empleado);
  }
}
