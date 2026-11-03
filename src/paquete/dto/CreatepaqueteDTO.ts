
import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsPositive,
  IsString,
  MinLength,
  IsNumber,
} from 'class-validator';

export class CreatePaqueteDTO {

  @IsString()
  @ApiProperty()
  Tracking: string;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  Descripcion: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  peso: number;

  @IsString()
  @ApiProperty()
  dimensiones: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  valorDeclarado: number;

  @IsPositive()
  @IsInt()
  @ApiProperty()
  idCliente: number;

  @IsPositive()
  @IsInt()
  @ApiProperty()
  idEstado: number;
}
