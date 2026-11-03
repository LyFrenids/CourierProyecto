import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateDireccionDTO {

  @IsPositive()
  @IsInt()
  @ApiProperty()
  idCliente: number;

  @IsString()
  @MinLength(3)
  @MaxLength(200)
  @ApiProperty()
  calle: string;

  @IsString()
  @ApiProperty()
  numero: string;

  @IsString()
  @ApiProperty()
  sector: string;

  @IsString()
  @ApiProperty()
  ciudad: string;

  @IsString()
  @ApiProperty()
  provincia: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  referencia?: string;

  @IsString()
  @ApiProperty()
  tipoDireccion: string;
}