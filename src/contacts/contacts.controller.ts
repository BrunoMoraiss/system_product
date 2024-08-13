import { ContactsService } from './contacts.service';

import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get(':number')
  async getAllContacts(@Param('number') number: string, @Res() res: Response) {
    try {
      const returnGetAllContacts =
        await this.contactsService.getAllContacts(number);

      return res.status(200).json(returnGetAllContacts);
    } catch (err) {
      return res.status(200).json({ statusCode: '400', message: err.message });
    }
  }
}
