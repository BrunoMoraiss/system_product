import { SecondDatabaseService } from './database-second.service';
import { DatabaseService } from './database.service';

import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [DatabaseService, SecondDatabaseService],
  exports: [DatabaseService, SecondDatabaseService],
})
export class DatabaseModule {}
