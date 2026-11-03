import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { EstadoPaqueteService } from './estado-paquete.service.js';
import { CreateEstadoPaqueteDTO } from './DTO/CreateEstadoPaquete.js';
import { UpdateEstadoPaqueteDTO } from './DTO/UpdateEstadoPaquete.js';

@Controller('estados-paquete')
export class EstadoPaqueteController {

  constructor(
    private readonly estadoPaqueteService: EstadoPaqueteService,
  ) {}

  // Listar estados
  @Get()
  async listarEstados() {
    return this.estadoPaqueteService.listarEstados();
  }

  // Crear estado
  @Post()
  async crearEstado(@Body() datosEstado: CreateEstadoPaqueteDTO) {
    return this.estadoPaqueteService.createEstado(datosEstado);
  }

  // Buscar estado por ID
  @Get(':id')
  async buscarEstadoPorId(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.estadoPaqueteService.buscarUnEstado(id);
  }

  // Actualizar estado
  @Put(':id')
  async actualizarEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosEstado: UpdateEstadoPaqueteDTO,
  ) {
    return this.estadoPaqueteService.updateEstado(id, datosEstado);
  }
}