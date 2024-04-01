import { LoggerModule } from './logger/logger.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
