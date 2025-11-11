import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SubmitAnswerDto {
  @ApiProperty({ example: 'question-id' })
  @IsString()
  questionId: string;

  @ApiProperty({ example: 'Answer text or option number' })
  answer: string | number;
}

