import { Test, TestingModule } from '@nestjs/testing';
import { EstadoPaqueteService } from './estado-paquete.service.js';

describe('EstadoPaqueteService', () => {
  let service: EstadoPaqueteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoPaqueteService],
    }).compile();

    service = module.get<EstadoPaqueteService>(EstadoPaqueteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
