import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EnrollContestDto {
  @ApiProperty({ example: 'contest-id' })
  @IsString()
  contestId: string;
}

