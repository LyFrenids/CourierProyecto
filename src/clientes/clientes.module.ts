import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller.js';
import { ClientesService } from './clientes.service.js';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
