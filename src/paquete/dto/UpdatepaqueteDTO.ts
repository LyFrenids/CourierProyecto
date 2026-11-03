
import { PartialType } from '@nestjs/swagger';
import { CreatePaqueteDTO } from './CreatepaqueteDTO.js';

export class UpdatePaqueteDTO extends PartialType(CreatePaqueteDTO) {}