import { PartialType } from '@nestjs/swagger';
import { CreateEstadoPaqueteDTO } from './CreateEstadoPaquete.js';

export class UpdateEstadoPaqueteDTO extends PartialType(CreateEstadoPaqueteDTO) {}