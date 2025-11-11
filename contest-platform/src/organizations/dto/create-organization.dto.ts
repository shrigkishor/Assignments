import { IsString, IsEmail, IsOptional, MinLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty({ example: 'Tech Solutions Inc' })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({ example: 'tech-solutions-inc' })
  @IsString()
  @Matches(/^[a-z0-9-]+$/, {
    message: 'Slug must contain only lowercase letters, numbers, and hyphens',
  })
  slug: string;

  @ApiProperty({ example: 'We provide innovative tech solutions' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'logo-url', required: false })
  @IsOptional()
  @IsString()
  logo?: string;

  @ApiProperty({ example: 'https://techsolutions.com', required: false })
  @IsOptional()
  @IsString()
  website?: string;

  @ApiProperty({ example: 'contact@techsolutions.com' })
  @IsEmail()
  contactEmail: string;

  @ApiProperty({ example: '+1234567890', required: false })
  @IsOptional()
  @IsString()
  contactPhone?: string;
}

