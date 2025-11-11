import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contest, ContestDocument, ContestStatus } from './schemas/contest.schema';
import { CreateContestDto } from './dto/create-contest.dto';
import { UpdateContestDto } from './dto/update-contest.dto';
import { OrganizationsService } from '../organizations/organizations.service';

@Injectable()
export class ContestsService {
  constructor(
    @InjectModel(Contest.name) private contestModel: Model<ContestDocument>,
    private organizationsService: OrganizationsService,
  ) {}

  async create(userId: string, createDto: CreateContestDto): Promise<ContestDocument> {
    const org = await this.organizationsService.findByUserId(userId);
    if (!org) {
      throw new BadRequestException('Organization not found for user');
    }

    const existingContest = await this.contestModel.findOne({ slug: createDto.slug });
    if (existingContest) {
      throw new BadRequestException('Contest with this slug already exists');
    }

    const contest = new this.contestModel({
      ...createDto,
      organizationId: org._id,
      pricing: {
        type: createDto.pricingType,
        amount: createDto.amount,
        currency: createDto.currency || 'USD',
      },
      schedule: {
        registrationStart: new Date(createDto.registrationStart),
        registrationEnd: new Date(createDto.registrationEnd),
        contestStart: new Date(createDto.contestStart),
        contestEnd: new Date(createDto.contestEnd),
      },
    });

    return contest.save();
  }

  async findAll(filters?: any): Promise<ContestDocument[]> {
    const query: any = { status: { $ne: ContestStatus.DRAFT } };
    
    if (filters?.category) {
      query.category = filters.category;
    }
    if (filters?.type) {
      query.type = filters.type;
    }
    if (filters?.status) {
      query.status = filters.status;
    }
    if (filters?.pricingType) {
      query['pricing.type'] = filters.pricingType;
    }

    return this.contestModel.find(query).populate('organizationId').exec();
  }

  async findOne(id: string): Promise<ContestDocument> {
    const contest = await this.contestModel
      .findById(id)
      .populate('organizationId')
      .exec();
    if (!contest) {
      throw new NotFoundException(`Contest with ID ${id} not found`);
    }
    
    // Increment views
    contest.stats.views += 1;
    await contest.save();
    
    return contest;
  }

  async findByOrganization(organizationId: string): Promise<ContestDocument[]> {
    return this.contestModel.find({ organizationId }).exec();
  }

  async update(id: string, userId: string, updateDto: UpdateContestDto): Promise<ContestDocument> {
    const contest = await this.findOne(id);
    const org = await this.organizationsService.findByUserId(userId);
    
    if (contest.organizationId.toString() !== org._id.toString()) {
      throw new BadRequestException('You do not have permission to update this contest');
    }

    Object.assign(contest, updateDto);
    return contest.save();
  }

  async publish(id: string, userId: string): Promise<ContestDocument> {
    const contest = await this.findOne(id);
    const org = await this.organizationsService.findByUserId(userId);
    
    if (contest.organizationId.toString() !== org._id.toString()) {
      throw new BadRequestException('You do not have permission to publish this contest');
    }

    contest.status = ContestStatus.PUBLISHED;
    contest.publishedAt = new Date();
    return contest.save();
  }

  async remove(id: string, userId: string): Promise<void> {
    const contest = await this.findOne(id);
    const org = await this.organizationsService.findByUserId(userId);
    
    if (contest.organizationId.toString() !== org._id.toString()) {
      throw new BadRequestException('You do not have permission to delete this contest');
    }

    await this.contestModel.deleteOne({ _id: id }).exec();
  }

  async getLeaderboard(id: string) {
    const contest = await this.findOne(id);
    // This would typically query enrollments and aggregate scores
    // Simplified for now
    return [];
  }
}

