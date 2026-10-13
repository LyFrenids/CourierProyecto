import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientesService } from './clientes.service.js';
import type { cliente } from '../generated/prisma/client.js';
@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly clientesService: ClientesService,
  ) {}

  @Get()
  async listarClientes() {
    return this.clientesService.listarClientes();
  }

  @Post()
  async crearCliente(@Body() datosCliente: cliente) {
    return this.clientesService.createCliente(datosCliente);
  }
}