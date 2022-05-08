import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogisticController } from './logistic/logistic.controller';
import { LogisticService } from './logistic/logistic.service';
import { LogisticEntity } from 'src/entities/logistic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogisticEntity])],
  controllers: [LogisticController],
  providers: [LogisticService],
})
export class MicroServiceModule {}
