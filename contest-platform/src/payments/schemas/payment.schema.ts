import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

export enum PaymentMethod {
  STRIPE = 'STRIPE',
  PAYPAL = 'PAYPAL',
  BANK_TRANSFER = 'BANK_TRANSFER',
  OTHER = 'OTHER',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

@Schema({ timestamps: true })
export class Payment {
  @Prop({ type: 'ObjectId', ref: 'User', required: true, index: true })
  userId: string;

  @Prop({ type: 'ObjectId', ref: 'Enrollment', required: true, index: true })
  enrollmentId: string;

  @Prop({ type: 'ObjectId', ref: 'Contest', required: true, index: true })
  contestId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ default: 'USD' })
  currency: string;

  @Prop({
    type: String,
    enum: PaymentMethod,
    default: PaymentMethod.STRIPE,
  })
  method: PaymentMethod;

  @Prop({
    type: String,
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
    index: true,
  })
  status: PaymentStatus;

  @Prop()
  transactionId?: string;

  @Prop({ type: Object })
  gatewayResponse?: Record<string, unknown>;

  @Prop()
  refundedAt?: Date;

  @Prop()
  refundAmount?: number;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);

