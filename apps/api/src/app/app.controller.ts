import { Prisma1Service } from '@beeman/prisma1';
import { Prisma2Service } from '@beeman/prisma2';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly p1: Prisma1Service,
    private readonly p2: Prisma2Service
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
