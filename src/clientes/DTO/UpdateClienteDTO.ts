import { PartialType } from '@nestjs/swagger';
import { CreateClienteDTO } from './CreateClienteDTO.js';

export class UpdateClienteDTO extends PartialType(CreateClienteDTO) {}