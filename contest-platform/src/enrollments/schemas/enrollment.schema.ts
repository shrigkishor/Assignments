import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EnrollmentDocument = Enrollment & Document;

export enum EnrollmentStatus {
  PENDING = 'PENDING',
  ENROLLED = 'ENROLLED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Schema({ timestamps: true })
export class Enrollment {
  @Prop({ type: 'ObjectId', ref: 'User', required: true, index: true })
  userId: string;

  @Prop({ type: 'ObjectId', ref: 'Contest', required: true, index: true })
  contestId: string;

  @Prop({
    type: String,
    enum: EnrollmentStatus,
    default: EnrollmentStatus.PENDING,
    index: true,
  })
  status: EnrollmentStatus;

  @Prop({ type: 'ObjectId', ref: 'Payment' })
  paymentId?: string;

  @Prop()
  enrolledAt?: Date;

  @Prop()
  startedAt?: Date;

  @Prop()
  completedAt?: Date;

  @Prop({
    type: [
      {
        questionId: { type: 'ObjectId', ref: 'Contest.questions' },
        answer: Schema.Types.Mixed,
        submittedAt: Date,
        score: Number,
        isCorrect: Boolean,
      },
    ],
    default: [],
  })
  submissions: Array<{
    questionId: string;
    answer: string | number | object;
    submittedAt: Date;
    score?: number;
    isCorrect?: boolean;
  }>;

  @Prop({ default: 0 })
  totalScore?: number;

  @Prop()
  rank?: number;

  @Prop({ default: false })
  certificateIssued: boolean;

  @Prop()
  certificateId?: string;
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);

