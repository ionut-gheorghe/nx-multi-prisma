import { Test } from '@nestjs/testing';
import { Prisma1Service } from './prisma1.service';

describe('Prisma1Service', () => {
  let service: Prisma1Service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [Prisma1Service],
    }).compile();

    service = module.get(Prisma1Service);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
