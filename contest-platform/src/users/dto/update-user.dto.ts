import { PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { CurrentMode } from '../schemas/user.schema';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'John', required: false })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ example: 'Doe', required: false })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({ example: '+1234567890', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'avatar-url', required: false })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ example: 'USER', enum: CurrentMode, required: false })
  @IsOptional()
  @IsEnum(CurrentMode)
  currentMode?: CurrentMode;
}

export class SwitchModeDto {
  @ApiProperty({ example: 'USER', enum: CurrentMode })
  @IsEnum(CurrentMode)
  mode: CurrentMode;
}

