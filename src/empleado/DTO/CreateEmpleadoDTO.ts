
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

export class CreateEmpleadoDTO {

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({
    example: 'Juan',
    description: 'Nombre del empleado',
  })
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({
    example: 'Pérez',
    description: 'Apellido del empleado',
  })
  apellido: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    example: '12345678901',
    description: 'Cédula del empleado',
  })
  cedula: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({
    example: '8091234567',
    description: 'Teléfono del empleado',
  })
  telefono: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(150)
  @ApiProperty({
    example: 'empleado@gmail.com',
    description: 'Correo electrónico del empleado',
  })
  correo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({
    example: 'Repartidor',
    description: 'Cargo del empleado',
  })
  cargo: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({
    example: true,
    description: 'Estado del empleado',
    default: true,
  })
  activo?: boolean;
}
