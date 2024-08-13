import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

import { Module } from '@nestjs/common';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
