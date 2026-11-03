
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEstadoPaqueteDTO {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @ApiProperty({
    example: 'En tránsito',
  })
  nombreEstado: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  @ApiPropertyOptional({
    example: 'El paquete está en camino',
  })
  Descripcion?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({
    example: true,
  })
  activo?: boolean;
}