

import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { PaqueteService } from './paquete.service.js';
import { CreatePaqueteDTO } from './dto/CreatepaqueteDTO.js';
import { UpdatePaqueteDTO } from './dto/UpdatepaqueteDTO.js';

@Controller('paquetes')
export class PaqueteController {

  constructor(
    private readonly paqueteService: PaqueteService,
  ) {}

  // Listar todos los paquetes
  @Get()
  async listarPaquetes() {
    return this.paqueteService.listarPaquetes();
  }

  // Crear un paquete
  @Post()
  async crearPaquete(@Body() datosPaquete: CreatePaqueteDTO) {
    return this.paqueteService.createPaquete(datosPaquete);
  }

  // Buscar paquete por ID
  @Get(':id')
  async buscarPaquetePorId(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.paqueteService.buscarUnPaquete(id);
  }

  // Actualizar paquete
  @Put(':id')
  async actualizarPaquete(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosPaquete: UpdatePaqueteDTO,
  ) {
    return this.paqueteService.updatePaquete(id, datosPaquete);
  }
}
