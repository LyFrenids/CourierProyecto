import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { CreateDireccionDTO } from './dto/CreatedireccionDTO.js';
import { UpdateDireccionDTO } from './dto/UpdatedireccionDTO.js';
import { DireccionService } from './direccion.service.js';

@Controller('direccion')
export class DireccionController {
  constructor(
    private readonly direccionService: DireccionService,
  ) {}

  @Get()
  async listarDirecciones() {
    return this.direccionService.listarDirecciones();
  }

  @Get('/buscar-direccion/:id')
  async buscarDireccionPorId(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.direccionService.buscarUnaDireccion(id);
  }

  @Post()
  async crearDireccion(@Body() direccion: CreateDireccionDTO) {
    return this.direccionService.createDireccion(direccion);
  }

  @Put(':id')
  async updateDireccion(
    @Param('id', ParseIntPipe) id: number,
    @Body() direccion: UpdateDireccionDTO,
  ) {
    return this.direccionService.updateDireccion(id, direccion);
  }
}