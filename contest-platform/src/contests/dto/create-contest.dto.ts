import { IsString, IsEnum, IsOptional, IsDateString, IsArray, IsNumber, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ContestType, PricingType } from '../schemas/contest.schema';

export class CreateContestDto {
  @ApiProperty({ example: 'Web Development Quiz 2024' })
  @IsString()
  @MinLength(5)
  title: string;

  @ApiProperty({ example: 'web-development-quiz-2024' })
  @IsString()
  slug: string;

  @ApiProperty({ example: 'Test your web development knowledge' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'Quick quiz on web dev', required: false })
  @IsOptional()
  @IsString()
  shortDescription?: string;

  @ApiProperty({ example: 'Programming', required: false })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({ example: ['web', 'quiz', 'programming'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiProperty({ example: 'QUIZ', enum: ContestType, default: 'QUIZ' })
  @IsEnum(ContestType)
  type: ContestType;

  @ApiProperty({ example: 'FREE', enum: PricingType, default: 'FREE' })
  @IsEnum(PricingType)
  pricingType: PricingType;

  @ApiProperty({ example: 0, required: false })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiProperty({ example: 'USD', required: false })
  @IsOptional()
  @IsString()
  currency?: string;

  @ApiProperty({ example: '2024-01-01T00:00:00Z' })
  @IsDateString()
  registrationStart: string;

  @ApiProperty({ example: '2024-01-15T00:00:00Z' })
  @IsDateString()
  registrationEnd: string;

  @ApiProperty({ example: '2024-01-16T00:00:00Z' })
  @IsDateString()
  contestStart: string;

  @ApiProperty({ example: '2024-01-31T23:59:59Z' })
  @IsDateString()
  contestEnd: string;

  @ApiProperty({ example: ['No cheating', 'Time limit applies'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  rules?: string[];
}

