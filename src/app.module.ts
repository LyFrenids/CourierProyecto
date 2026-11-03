import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ClientesModule } from './clientes/clientes.module.js';
import { PaqueteModule } from './paquete/paquete.module.js';
import { EstadoPaqueteModule } from './estado-paquete/estado-paquete.module.js';
import { EnvioModule } from './envio/envio.module.js';
import { DireccionModule } from './direccion/direccion.module.js';
import { PagoModule } from './pago/pago.module.js';
import { EmpleadoModule } from './empleado/empleado.module.js';

@Module({
  imports: [ClientesModule, PaqueteModule, EstadoPaqueteModule, EnvioModule, DireccionModule, PagoModule, EmpleadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
