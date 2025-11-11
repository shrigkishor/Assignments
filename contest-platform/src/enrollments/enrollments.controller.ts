import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { EnrollmentsService } from './enrollments.service';
import { EnrollContestDto } from './dto/enroll-contest.dto';
import { SubmitAnswerDto } from './dto/submit-answer.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { ModeGuard } from '../common/guards/mode.guard';
import { RequireMode } from '../common/decorators/mode.decorator';
import { Mode } from '../common/decorators/mode.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('Enrollments')
@Controller('enrollments')
@UseGuards(JwtAuthGuard, ModeGuard)
@RequireMode(Mode.USER)
@ApiBearerAuth()
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Enroll in a contest' })
  enroll(@CurrentUser() user: any, @Body() enrollDto: EnrollContestDto) {
    return this.enrollmentsService.enroll(user.sub, enrollDto.contestId);
  }

  @Get('my-enrollments')
  @ApiOperation({ summary: 'Get current user enrollments' })
  getMyEnrollments(@CurrentUser() user: any) {
    return this.enrollmentsService.findUserEnrollments(user.sub);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get enrollment details' })
  findOne(@Param('id') id: string) {
    return this.enrollmentsService.findOne(id);
  }

  @Post(':id/submit')
  @ApiOperation({ summary: 'Submit an answer' })
  submitAnswer(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() submitDto: SubmitAnswerDto,
  ) {
    return this.enrollmentsService.submitAnswer(
      id,
      user.sub,
      submitDto.questionId,
      submitDto.answer,
    );
  }

  @Post(':id/complete')
  @ApiOperation({ summary: 'Complete contest participation' })
  complete(@Param('id') id: string, @CurrentUser() user: any) {
    return this.enrollmentsService.complete(id, user.sub);
  }
}

