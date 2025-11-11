import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ContestDocument = Contest & Document;

export enum ContestType {
  QUIZ = 'QUIZ',
  CODING = 'CODING',
  DESIGN = 'DESIGN',
  ESSAY = 'ESSAY',
  OTHER = 'OTHER',
}

export enum ContestStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum PricingType {
  FREE = 'FREE',
  PAID = 'PAID',
}

@Schema({ timestamps: true })
export class Contest {
  @Prop({ type: 'ObjectId', ref: 'Organization', required: true, index: true })
  organizationId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true, index: true })
  slug: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  shortDescription?: string;

  @Prop()
  image?: string;

  @Prop({ required: true })
  category: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({
    type: String,
    enum: ContestType,
    default: ContestType.QUIZ,
  })
  type: ContestType;

  @Prop({
    type: {
      type: { type: String, enum: ['FREE', 'PAID'], default: 'FREE' },
      amount: Number,
      currency: { type: String, default: 'USD' },
    },
    _id: false,
    default: { type: 'FREE' },
  })
  pricing: {
    type: PricingType;
    amount?: number;
    currency?: string;
  };

  @Prop({
    type: {
      registrationStart: Date,
      registrationEnd: Date,
      contestStart: Date,
      contestEnd: Date,
    },
    _id: false,
    required: true,
  })
  schedule: {
    registrationStart: Date;
    registrationEnd: Date;
    contestStart: Date;
    contestEnd: Date;
  };

  @Prop({ type: [String], default: [] })
  rules: string[];

  @Prop({
    type: [
      {
        rank: Number,
        title: String,
        description: String,
        reward: {
          type: { type: String, enum: ['CASH', 'CREDENTIALS', 'GOODIES'] },
          amount: Number,
          currency: String,
        },
      },
    ],
    default: [],
  })
  prizes: Array<{
    rank: number;
    title: string;
    description: string;
    reward?: {
      type: 'CASH' | 'CREDENTIALS' | 'GOODIES';
      amount?: number;
      currency?: string;
    };
  }>;

  @Prop({
    type: [
      {
        type: { type: String, enum: ['MULTIPLE_CHOICE', 'SHORT_ANSWER', 'LONG_ANSWER', 'CODE'] },
        question: String,
        options: [String],
        correctAnswer: MongooseSchema.Types.Mixed,
        points: Number,
        order: Number,
      },
    ],
    default: [],
  })
  questions: Array<{
    type: 'MULTIPLE_CHOICE' | 'SHORT_ANSWER' | 'LONG_ANSWER' | 'CODE';
    question: string;
    options?: string[];
    correctAnswer?: string | number;
    points: number;
    order: number;
  }>;

  @Prop({
    type: {
      maxParticipants: Number,
      minAge: Number,
      maxAge: Number,
      allowLateSubmission: { type: Boolean, default: false },
      showLeaderboard: { type: Boolean, default: true },
      requireEmailVerification: { type: Boolean, default: false },
    },
    _id: false,
    default: {},
  })
  settings: {
    maxParticipants?: number;
    minAge?: number;
    maxAge?: number;
    allowLateSubmission: boolean;
    showLeaderboard: boolean;
    requireEmailVerification: boolean;
  };

  @Prop({
    type: String,
    enum: ContestStatus,
    default: ContestStatus.DRAFT,
    index: true,
  })
  status: ContestStatus;

  @Prop({
    type: {
      views: { type: Number, default: 0 },
      enrollments: { type: Number, default: 0 },
      submissions: { type: Number, default: 0 },
    },
    _id: false,
    default: {},
  })
  stats: {
    views: number;
    enrollments: number;
    submissions: number;
  };

  @Prop()
  publishedAt?: Date;
}

export const ContestSchema = SchemaFactory.createForClass(Contest);

