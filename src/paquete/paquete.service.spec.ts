import { Test, TestingModule } from '@nestjs/testing';
import { PaqueteService } from './paquete.service.js';

describe('PaqueteService', () => {
  let service: PaqueteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaqueteService],
    }).compile();

    service = module.get<PaqueteService>(PaqueteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
