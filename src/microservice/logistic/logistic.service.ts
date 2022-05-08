import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogisticEntity } from 'src/entities/logistic.entity';
import { LogisticResponse } from './logistic.interface';

@Injectable()
export class LogisticService {

  constructor(
    @InjectRepository(LogisticEntity) private logisticRepository: Repository<LogisticEntity>
  ) {}

  public async createSentOrder(orderId: number): Promise<LogisticResponse> {
    let result: LogisticResponse = {
      id: 0,
      errorMessage: null
    };

    try {
      const logistic = { orderId: orderId };
      const newLogistic = this.logisticRepository.save(logistic);
      result.id = (await newLogistic).id;
    } catch (error) {
      result.errorMessage = error.sqlMessage;
    }

    return result;
  }
}
