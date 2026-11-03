
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { paquete } from '../generated/prisma/client.js';
import { UpdatePaqueteDTO } from './dto/UpdatepaqueteDTO.js';
import { CreatePaqueteDTO } from './dto/CreatepaqueteDTO.js';

@Injectable()
export class PaqueteService {

  constructor(private readonly prismaService: PrismaService) {}

  async createPaquete(paquete: CreatePaqueteDTO) {
    const nuevoPaquete = await this.prismaService.paquete.create({
      data: paquete,
    });

    return nuevoPaquete;
  }

  async updatePaquete(idPaquete: number, data: UpdatePaqueteDTO) {
    return await this.prismaService.paquete.update({
      where: { idPaquete },
      data,
    });
  }

  async listarPaquetes(): Promise<paquete[]> {
    const paquetes = await this.prismaService.paquete.findMany();
    return paquetes;
  }

  async buscarUnPaquete(idPaquete: number) {
    try {
      const paquete = await this.prismaService.paquete.findUnique({
        where: { idPaquete },
      });

      if (paquete) {
        return paquete;
      }

      throw new NotFoundException(
        `No se encontró el paquete con el ID ${idPaquete}`,
      );

    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

