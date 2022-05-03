import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { LogisticResponse } from './logistic.interface';

@Injectable()
export class LogisticService {
  public createSentOrder(orderId: number): LogisticResponse {
    let result: LogisticResponse = {
      id: 0,
      success: true,
      errorMessage: null
    };

    // TODO Process logistic order creation
    
    result.id = randomInt(1000);

    return result;
  }
}
