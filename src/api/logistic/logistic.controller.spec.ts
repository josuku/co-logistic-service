import { Test, TestingModule } from '@nestjs/testing';
import { LogisticController } from './logistic.controller';
import { LogisticService } from './logistic.service';

describe('AppController', () => {
  let appController: LogisticController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LogisticController],
      providers: [LogisticService],
    }).compile();

    appController = app.get<LogisticController>(LogisticController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
