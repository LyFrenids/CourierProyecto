import { Module } from '@nestjs/common';
import { PagoService } from './pago.service.js';
import { PagoController } from './pago.controller.js';

@Module({
  providers: [PagoService],
  controllers: [PagoController]
})
export class PagoModule {}
