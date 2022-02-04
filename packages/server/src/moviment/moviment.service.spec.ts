import { Test, TestingModule } from '@nestjs/testing';
import { MovimentService } from './moviment.service';

describe('MovimentService', () => {
  let service: MovimentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimentService],
    }).compile();

    service = module.get<MovimentService>(MovimentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
