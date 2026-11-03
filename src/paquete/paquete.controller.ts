
import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
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

  @IsInt()
  @IsPositive()
  @ApiProperty()
  idCliente: number;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  idEstado: number;
}