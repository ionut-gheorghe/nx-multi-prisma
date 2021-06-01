import { Module } from '@nestjs/common';
import { Prisma1Service } from './prisma1.service';

@Module({
  controllers: [],
  providers: [Prisma1Service],
  exports: [Prisma1Service],
})
export class Prisma1Module {}
