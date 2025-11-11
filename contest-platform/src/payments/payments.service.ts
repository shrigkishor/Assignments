import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument, PaymentStatus } from './schemas/payment.schema';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async createPaymentIntent(
    userId: string,
    contestId: string,
    amount: number,
    currency: string,
  ): Promise<PaymentDocument> {
    // In a real implementation, this would integrate with Stripe/PayPal
    const payment = new this.paymentModel({
      userId,
      contestId,
      amount,
      currency,
      status: PaymentStatus.PENDING,
    });

    return payment.save();
  }

  async confirmPayment(paymentId: string, transactionId: string): Promise<PaymentDocument> {
    const payment = await this.paymentModel.findById(paymentId);
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }

    payment.status = PaymentStatus.COMPLETED;
    payment.transactionId = transactionId;
    
    return payment.save();
  }

  async findOne(id: string): Promise<PaymentDocument> {
    const payment = await this.paymentModel.findById(id).exec();
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  async refund(paymentId: string, refundAmount?: number): Promise<PaymentDocument> {
    const payment = await this.findOne(paymentId);
    
    payment.status = PaymentStatus.REFUNDED;
    payment.refundedAt = new Date();
    payment.refundAmount = refundAmount || payment.amount;
    
    return payment.save();
  }
}

