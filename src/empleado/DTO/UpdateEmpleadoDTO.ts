import { PartialType } from '@nestjs/swagger';
import { CreateEmpleadoDTO } from './CreateEmpleadoDTO.js';

export class UpdateEmpleadoDTO extends PartialType(CreateEmpleadoDTO) {}