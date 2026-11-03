
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { ClientesService } from './clientes.service.js';
import { CreateClienteDTO } from './DTO/CreateClienteDTO.js';
import { UpdateClienteDTO } from './DTO/UpdateClienteDTO.js';

@Controller('clientes')
export class ClientesController {

  constructor(
    private readonly clientesService: ClientesService,
  ) {}

  // Listar todos los clientes
  @Get()
  async listarClientes() {
    return this.clientesService.listarClientes();
  }

  // Crear un cliente
  @Post()
  async crearCliente(@Body() datosCliente: CreateClienteDTO) {
    return this.clientesService.createCliente(datosCliente);
  }

  // Buscar cliente por ID
  @Get('buscar-cliente/:id')
  async buscarClientePorId(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.clientesService.buscarUnCliente(id);
  }

  // Actualizar cliente
  @Put(':id')
  async updateCliente(
    @Param('id', ParseIntPipe) id: number,
    @Body() cliente: UpdateClienteDTO,
  ) {
    return this.clientesService.updateCliente(id, cliente);
  }
}
