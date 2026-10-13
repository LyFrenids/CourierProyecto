import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller.js';
import { ClientesService } from './clientes.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
    imports: [PrismaModule],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
