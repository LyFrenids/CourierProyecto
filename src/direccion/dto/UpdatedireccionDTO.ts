import { PartialType } from '@nestjs/swagger';
import { CreateDireccionDTO } from './CreatedireccionDTO.js';

export class UpdateDireccionDTO extends PartialType(CreateDireccionDTO) {}