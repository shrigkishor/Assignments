import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrganizationDocument = Organization & Document;

@Schema({ timestamps: true })
export class Organization {
  @Prop({ type: 'ObjectId', ref: 'User', required: true, index: true })
  userId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, index: true })
  slug: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  logo?: string;

  @Prop()
  website?: string;

  @Prop({ required: true })
  contactEmail: string;

  @Prop()
  contactPhone?: string;

  @Prop({
    type: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    _id: false,
  })
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };

  @Prop({ default: false })
  isVerified: boolean;

  @Prop({
    type: {
      allowPublicContests: { type: Boolean, default: true },
      paymentEnabled: { type: Boolean, default: true },
      notificationPreferences: { type: Object, default: {} },
    },
    _id: false,
    default: {},
  })
  settings: {
    allowPublicContests: boolean;
    paymentEnabled: boolean;
    notificationPreferences: Record<string, unknown>;
  };

  @Prop({
    type: {
      totalContests: { type: Number, default: 0 },
      totalParticipants: { type: Number, default: 0 },
      totalRevenue: { type: Number, default: 0 },
    },
    _id: false,
    default: {},
  })
  stats: {
    totalContests: number;
    totalParticipants: number;
    totalRevenue: number;
  };
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

