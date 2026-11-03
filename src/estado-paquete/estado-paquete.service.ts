
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';

import { CreateEstadoPaqueteDTO } from './DTO/CreateEstadoPaquete.js';
import { UpdateEstadoPaqueteDTO } from './DTO/UpdateEstadoPaquete.js';

@Injectable()
export class EstadoPaqueteService {

  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  // Crear estado
  async createEstado(datosEstado: CreateEstadoPaqueteDTO) {
    try {
      return await this.prismaService.estadoPaquete.create({
        data: datosEstado,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Este estado ya existe');
      }
      throw error;
    }
  }

  // Listar estados
  async listarEstados() {
    return await this.prismaService.estadoPaquete.findMany();
  }

  // Buscar estado
  async buscarUnEstado(id: number) {
    const estado = await this.prismaService.estadoPaquete.findUnique({
      where: { idEstado: id },
    });

    if (!estado) {
      throw new NotFoundException(`No existe el estado con ID: ${id}`);
    }

    return estado;
  }

  // Actualizar estado
  async updateEstado(id: number, data: UpdateEstadoPaqueteDTO) {
    try {
      return await this.prismaService.estadoPaquete.update({
        where: { idEstado: id },
        data,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`No existe el estado con ID: ${id}`);
      }

      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Este nombre de estado ya existe');
      }

      throw error;
    }
  }
}
