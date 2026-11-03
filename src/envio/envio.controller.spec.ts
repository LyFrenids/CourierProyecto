import { Test, TestingModule } from '@nestjs/testing';
import { EnvioController } from './envio.controller.js';

describe('EnvioController', () => {
  let controller: EnvioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvioController],
    }).compile();

    controller = module.get<EnvioController>(EnvioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
