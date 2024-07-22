import { DatabaseModule } from './database/database.module';
import { LoggerModule } from './logger/logger.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { ServicesModule } from './services/services.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [LoggerModule, DatabaseModule, ServicesModule, QrcodeModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
