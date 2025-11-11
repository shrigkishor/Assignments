import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enrollment, EnrollmentDocument, EnrollmentStatus } from './schemas/enrollment.schema';
import { ContestsService } from '../contests/contests.service';
import { PaymentsService } from '../payments/payments.service';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectModel(Enrollment.name) private enrollmentModel: Model<EnrollmentDocument>,
    private contestsService: ContestsService,
    private paymentsService: PaymentsService,
  ) {}

  async enroll(userId: string, contestId: string): Promise<EnrollmentDocument> {
    const contest = await this.contestsService.findOne(contestId);
    
    // Check if already enrolled
    const existingEnrollment = await this.enrollmentModel.findOne({
      userId,
      contestId,
    });
    
    if (existingEnrollment) {
      throw new BadRequestException('Already enrolled in this contest');
    }

    // Handle payment for paid contests
    let paymentId: string | undefined;
    if (contest.pricing.type === 'PAID') {
      const payment = await this.paymentsService.createPaymentIntent(
        userId,
        contestId,
        contest.pricing.amount || 0,
        contest.pricing.currency || 'USD',
      );
      paymentId = payment._id.toString();
    }

    const enrollment = new this.enrollmentModel({
      userId,
      contestId,
      paymentId,
      status: contest.pricing.type === 'PAID' ? EnrollmentStatus.PENDING : EnrollmentStatus.ENROLLED,
      enrolledAt: new Date(),
    });

    // Update contest stats
    contest.stats.enrollments += 1;
    await contest.save();

    return enrollment.save();
  }

  async findUserEnrollments(userId: string): Promise<EnrollmentDocument[]> {
    return this.enrollmentModel
      .find({ userId })
      .populate('contestId')
      .exec();
  }

  async findOne(id: string): Promise<EnrollmentDocument> {
    const enrollment = await this.enrollmentModel
      .findById(id)
      .populate('contestId')
      .populate('paymentId')
      .exec();
    
    if (!enrollment) {
      throw new NotFoundException(`Enrollment with ID ${id} not found`);
    }
    
    return enrollment;
  }

  async submitAnswer(
    enrollmentId: string,
    userId: string,
    questionId: string,
    answer: string | number,
  ): Promise<EnrollmentDocument> {
    const enrollment = await this.findOne(enrollmentId);
    
    if (enrollment.userId.toString() !== userId) {
      throw new BadRequestException('Not authorized to submit for this enrollment');
    }

    if (enrollment.status === EnrollmentStatus.COMPLETED) {
      throw new BadRequestException('Contest already completed');
    }

    // Update or add submission
    const submissionIndex = enrollment.submissions.findIndex(
      (s) => s.questionId.toString() === questionId,
    );

    const submission = {
      questionId,
      answer,
      submittedAt: new Date(),
    };

    if (submissionIndex >= 0) {
      enrollment.submissions[submissionIndex] = submission;
    } else {
      enrollment.submissions.push(submission);
    }

    if (enrollment.status === EnrollmentStatus.ENROLLED) {
      enrollment.status = EnrollmentStatus.IN_PROGRESS;
      enrollment.startedAt = new Date();
    }

    return enrollment.save();
  }

  async complete(enrollmentId: string, userId: string): Promise<EnrollmentDocument> {
    const enrollment = await this.findOne(enrollmentId);
    
    if (enrollment.userId.toString() !== userId) {
      throw new BadRequestException('Not authorized');
    }

    enrollment.status = EnrollmentStatus.COMPLETED;
    enrollment.completedAt = new Date();
    
    // Calculate total score (simplified - would need to check answers)
    enrollment.totalScore = 0;
    
    return enrollment.save();
  }
}

