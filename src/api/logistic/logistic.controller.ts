import { BadRequestException, Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { LogisticResponse } from './logistic.interface';
import { MessagePattern } from '@nestjs/microservices';
import { LogisticService } from './logistic.service';

@Controller('')
export class LogisticController {
  constructor(private readonly logisticService: LogisticService) {}

  @MessagePattern('createSentOrder')
  public async createSentOrder(@Body() orderId: number): Promise<LogisticResponse> {
    Logger.log(orderId)
    if (orderId <= 0) {
      Logger.error('Bad Request', orderId);
      throw new BadRequestException();
    }
    return this.logisticService.createSentOrder(orderId);
  }
}
