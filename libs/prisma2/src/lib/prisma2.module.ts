import { Module } from '@nestjs/common';
import { Prisma2Service } from './prisma2.service';

@Module({
  controllers: [],
  providers: [Prisma2Service],
  exports: [Prisma2Service],
})
export class Prisma2Module {}
