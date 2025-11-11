import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from './schemas/organization.schema';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<OrganizationDocument>,
  ) {}

  async create(userId: string, createDto: CreateOrganizationDto): Promise<OrganizationDocument> {
    const existingOrg = await this.organizationModel.findOne({
      $or: [{ slug: createDto.slug }, { userId }],
    });

    if (existingOrg) {
      throw new BadRequestException('Organization with this slug or user already exists');
    }

    const organization = new this.organizationModel({
      ...createDto,
      userId,
    });

    return organization.save();
  }

  async findAll(): Promise<OrganizationDocument[]> {
    return this.organizationModel.find().exec();
  }

  async findOne(id: string): Promise<OrganizationDocument> {
    const org = await this.organizationModel.findById(id).exec();
    if (!org) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
    return org;
  }

  async findByUserId(userId: string): Promise<OrganizationDocument | null> {
    return this.organizationModel.findOne({ userId }).exec();
  }

  async update(id: string, updateDto: UpdateOrganizationDto): Promise<OrganizationDocument> {
    const org = await this.findOne(id);
    Object.assign(org, updateDto);
    return org.save();
  }

  async remove(id: string): Promise<void> {
    const result = await this.organizationModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
  }

  async getStats(id: string) {
    const org = await this.findOne(id);
    return org.stats;
  }
}

