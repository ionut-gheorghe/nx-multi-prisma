import { Test } from '@nestjs/testing';
import { Prisma2Service } from './prisma2.service';

describe('Prisma2Service', () => {
  let service: Prisma2Service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [Prisma2Service],
    }).compile();

    service = module.get(Prisma2Service);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
