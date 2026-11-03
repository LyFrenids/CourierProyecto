
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsBoolean,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClienteDTO {

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({
    example: 'Frandy',
    description: 'Nombre del cliente',
  })
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({
    example: 'Brito',
    description: 'Apellido del cliente',
  })
  apellido: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    example: '12345678901',
    description: 'Cédula del cliente',
  })
  cedula: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    example: '8091234567',
    description: 'Teléfono del cliente',
  })
  telefono: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(150)
  @ApiProperty({
    example: 'cliente@gmail.com',
    description: 'Correo electrónico del cliente',
  })
  correo: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({
    example: true,
    description: 'Estado del cliente',
    default: true,
  })
  activo?: boolean;
}