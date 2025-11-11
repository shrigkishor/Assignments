import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('Payments')
@Controller('payments')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-intent')
  @ApiOperation({ summary: 'Create payment intent' })
  createIntent(@CurrentUser() user: any, @Body() createDto: CreatePaymentIntentDto) {
    return this.paymentsService.createPaymentIntent(
      user.sub,
      createDto.contestId,
      createDto.amount,
      createDto.currency || 'USD',
    );
  }

  @Post(':id/confirm')
  @ApiOperation({ summary: 'Confirm payment' })
  confirm(@Param('id') id: string, @Body() confirmDto: ConfirmPaymentDto) {
    return this.paymentsService.confirmPayment(id, confirmDto.transactionId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get payment details' })
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(id);
  }

  @Post(':id/refund')
  @ApiOperation({ summary: 'Refund payment' })
  refund(@Param('id') id: string, @Body() refundDto?: { amount?: number }) {
    return this.paymentsService.refund(id, refundDto?.amount);
  }
}

