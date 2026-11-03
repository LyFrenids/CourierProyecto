import { Test, TestingModule } from '@nestjs/testing';
import { EnvioService } from './envio.service.js';

describe('EnvioService', () => {
  let service: EnvioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvioService],
    }).compile();

    service = module.get<EnvioService>(EnvioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
