import { Test, TestingModule } from '@nestjs/testing';
import { MovimentController } from './moviment.controller';

describe('MovimentController', () => {
  let controller: MovimentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimentController],
    }).compile();

    controller = module.get<MovimentController>(MovimentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
