import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { ModeGuard } from '../common/guards/mode.guard';
import { RequireMode } from '../common/decorators/mode.decorator';
import { Mode } from '../common/decorators/mode.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('Organizations')
@Controller('organizations')
@UseGuards(JwtAuthGuard, ModeGuard)
@ApiBearerAuth()
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @RequireMode(Mode.ORGANIZATION)
  @ApiOperation({ summary: 'Create a new organization' })
  create(@CurrentUser() user: any, @Body() createDto: CreateOrganizationDto) {
    return this.organizationsService.create(user.sub, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all organizations' })
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get('my-organization')
  @RequireMode(Mode.ORGANIZATION)
  @ApiOperation({ summary: 'Get current user organization' })
  findMyOrganization(@CurrentUser() user: any) {
    return this.organizationsService.findByUserId(user.sub);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get organization by ID' })
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(id);
  }

  @Get(':id/stats')
  @RequireMode(Mode.ORGANIZATION)
  @ApiOperation({ summary: 'Get organization statistics' })
  getStats(@Param('id') id: string) {
    return this.organizationsService.getStats(id);
  }

  @Patch(':id')
  @RequireMode(Mode.ORGANIZATION)
  @ApiOperation({ summary: 'Update organization' })
  update(@Param('id') id: string, @Body() updateDto: UpdateOrganizationDto) {
    return this.organizationsService.update(id, updateDto);
  }

  @Delete(':id')
  @RequireMode(Mode.ORGANIZATION)
  @ApiOperation({ summary: 'Delete organization' })
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(id);
  }
}

