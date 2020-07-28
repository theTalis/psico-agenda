import { Test, TestingModule } from '@nestjs/testing';
import { ProfissionalService } from './profissional.service';

describe('ProfissionalService', () => {
  let provider: ProfissionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfissionalService],
    }).compile();

    provider = module.get<ProfissionalService>(ProfissionalService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
