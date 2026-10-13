import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { cliente } from '../generated/prisma/client.js';

@Injectable()
export class ClientesService {
  // DI => Injeccion de dependencia -> PrismaService
  constructor(private readonly prismaService: PrismaService) {}

  async createCliente(cliente: cliente) {
    var cliente = await this.prismaService.cliente.create({ data: cliente });
    return cliente;
  }

  async listarClientes(): Promise<cliente[]> {
    var clientes = await this.prismaService.cliente.findMany();
    return clientes;
  }

  async buscarUnCliente(cliente_id: number) {
    var cliente = await this.prismaService.cliente.findUnique({
      where: { idCliente: cliente_id },
    });

    if (cliente) {
      return cliente;
    } else {
      throw new NotFoundException(
        `No se encontro cliente con el id: ${cliente_id}`,
      );
    }
  }
}