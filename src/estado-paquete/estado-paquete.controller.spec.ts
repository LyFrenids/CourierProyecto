import { Test, TestingModule } from '@nestjs/testing';
import { EstadoPaqueteController } from './estado-paquete.controller.js';

describe('EstadoPaqueteController', () => {
  let controller: EstadoPaqueteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoPaqueteController],
    }).compile();

    controller = module.get<EstadoPaqueteController>(EstadoPaqueteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
