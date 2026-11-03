
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEmpleadoDTO } from './DTO/CreateEmpleadoDTO.js';
import { UpdateEmpleadoDTO } from './DTO/UpdateEmpleadoDTO.js';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class EmpleadosService {

  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  // Crear empleado
  async createEmpleado(datosEmpleado: CreateEmpleadoDTO) {

    const empleadoExistente = await this.prismaService.empleado.findFirst({
      where: {
        OR: [
          { cedula: datosEmpleado.cedula },
          { correo: datosEmpleado.correo },
        ],
      },
    });

    if (empleadoExistente) {
      throw new ConflictException(
        'La cédula o el correo ya están registrados',
      );
    }

    return await this.prismaService.empleado.create({
      data: datosEmpleado,
    });
  }

  // Listar todos los empleados
  async listarEmpleados() {
    return await this.prismaService.empleado.findMany();
  }

  // Buscar empleado por ID
  async buscarUnEmpleado(id: number) {

    const empleado = await this.prismaService.empleado.findUnique({
      where: {
        idEmpleado: id,
      },
    });

    if (!empleado) {
      throw new NotFoundException(
        `No se encontró empleado con el ID: ${id}`,
      );
    }

    return empleado;
  }

  // Actualizar empleado
  async updateEmpleado(id: number, data: UpdateEmpleadoDTO) {

    try {
      return await this.prismaService.empleado.update({
        where: {
          idEmpleado: id,
        },
        data,
      });

    } catch (error) {

      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `No se encontró empleado con el ID: ${id}`,
        );
      }

      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'La cédula o el correo ya están registrados',
        );
      }

      throw error;
    }
  }
}
