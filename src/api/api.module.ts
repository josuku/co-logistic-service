import { Module } from '@nestjs/common';
import { LogisticController } from './logistic/logistic.controller';
import { LogisticService } from './logistic/logistic.service';

@Module({
  imports: [],
  controllers: [LogisticController],
  providers: [LogisticService],
})
export class ApiModule {}
