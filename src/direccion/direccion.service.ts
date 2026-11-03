import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Direccion } from '../generated/prisma/client.js';
import { UpdateDireccionDTO } from './dto/UpdatedireccionDTO.js';
import { CreateDireccionDTO } from './dto/CreatedireccionDTO.js';

@Injectable()
export class DireccionService {

  constructor(private readonly prismaService: PrismaService) {}

async createDireccion(direccion: CreateDireccionDTO) {
  const nuevaDireccion = await this.prismaService.direccion.create({
    data: direccion,
  });

  return nuevaDireccion;
}

  async updateDireccion(idDireccion: number, data: UpdateDireccionDTO) {
    return await this.prismaService.direccion.update({
      where: { idDireccion },
      data,
    });
  }

  async listarDirecciones(): Promise<Direccion[]> {
    var direcciones = await this.prismaService.direccion.findMany();
    return direcciones;
  }

  async buscarUnaDireccion(idDireccion: number) {
    try {
      var direccion = await this.prismaService.direccion.findUnique({
        where: { idDireccion },
      });

      if (direccion) {
        return direccion;
      } 
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}