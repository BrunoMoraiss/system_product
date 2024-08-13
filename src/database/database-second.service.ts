import { Prisma, PrismaClient } from '@internal/prisma-second/client';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class SecondDatabaseService
  extends PrismaClient<Prisma.PrismaClientOptions, 'error' | 'query'>
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();

    this.$on('error', () => {});
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
