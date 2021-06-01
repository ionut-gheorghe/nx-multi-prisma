import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated';

@Injectable()
export class Prisma1Service
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    this.$connect();
  }
  onModuleDestroy() {
    this.$disconnect();
  }
}
