import { Module } from '@nestjs/common';
import { EnvioService } from './envio.service.js';
import { EnvioController } from './envio.controller.js';

@Module({
  providers: [EnvioService],
  controllers: [EnvioController]
})
export class EnvioModule {}
