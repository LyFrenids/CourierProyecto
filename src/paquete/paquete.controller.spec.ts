import { Test, TestingModule } from '@nestjs/testing';
import { PaqueteController } from './paquete.controller.js';

describe('PaqueteController', () => {
  let controller: PaqueteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaqueteController],
    }).compile();

    controller = module.get<PaqueteController>(PaqueteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
