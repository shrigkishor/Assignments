import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ContestsService } from './contests.service';
import { CreateContestDto } from './dto/create-contest.dto';
import { UpdateContestDto } from './dto/update-contest.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { ModeGuard } from '../common/guards/mode.guard';
import { RequireMode } from '../common/decorators/mode.decorator';
import { Mode } from '../common/decorators/mode.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Contests')
@Controller('contests')
export class ContestsController {
  constructor(private readonly contestsService: ContestsService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'List all published contests' })
  findAll(@Query() filters: any) {
    return this.contestsService.findAll(filters);
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get contest details' })
  findOne(@Param('id') id: string) {
    return this.contestsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, ModeGuard)
  @Post()
  @RequireMode(Mode.ORGANIZATION)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new contest (Organization only)' })
  create(@CurrentUser() user: any, @Body() createDto: CreateContestDto) {
    return this.contestsService.create(user.sub, createDto);
  }

  @UseGuards(JwtAuthGuard, ModeGuard)
  @Patch(':id')
  @RequireMode(Mode.ORGANIZATION)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update contest (Organization only)' })
  update(
    @Param('id') id: string,
    @CurrentUser() user: any,
    @Body() updateDto: UpdateContestDto,
  ) {
    return this.contestsService.update(id, user.sub, updateDto);
  }

  @UseGuards(JwtAuthGuard, ModeGuard)
  @Post(':id/publish')
  @RequireMode(Mode.ORGANIZATION)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Publish contest (Organization only)' })
  publish(@Param('id') id: string, @CurrentUser() user: any) {
    return this.contestsService.publish(id, user.sub);
  }

  @UseGuards(JwtAuthGuard, ModeGuard)
  @Get(':id/leaderboard')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get contest leaderboard' })
  getLeaderboard(@Param('id') id: string) {
    return this.contestsService.getLeaderboard(id);
  }

  @UseGuards(JwtAuthGuard, ModeGuard)
  @Delete(':id')
  @RequireMode(Mode.ORGANIZATION)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete contest (Organization only)' })
  remove(@Param('id') id: string, @CurrentUser() user: any) {
    return this.contestsService.remove(id, user.sub);
  }
}

