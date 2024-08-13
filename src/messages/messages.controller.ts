import { MessagesService } from './messages.service';

import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async findId(
    @Query('chatNumber') chatNumber: string,
    @Query('collectionNumber') collectionNumber: string,
    @Res() res: Response,
  ) {
    try {
      const returnGetAllMessages = await this.messagesService.findOne(
        chatNumber,
        collectionNumber,
      );

      return res.status(200).json(returnGetAllMessages);
    } catch (err) {
      return res.status(200).json({ statusCode: '400', message: err.message });
    }
  }
}
