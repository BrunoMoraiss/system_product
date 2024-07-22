// service.module.ts

import { CacheService } from './tempory-data.service';

import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [CacheService],
  exports: [CacheService],
})
export class ServicesModule {}
