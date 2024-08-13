import { MessageEntity } from './entity/message';

import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { DateFormatter } from 'src/helpers/DateFormatter';

@Injectable()
export class MessagesService {
  constructor(@InjectConnection() private readonly connection: Connection) {}
  async findOne(chatNumber: string, collectionNumber: string) {
    try {
      const allMessages = [];

      const collection = this.connection.collection(collectionNumber);

      const findCollection = await collection
        .find({ 'message.info.messagesource.chat.user': chatNumber })
        .toArray();

      findCollection.map((message) => {
        const newMessage = new MessageEntity(
          message._id.toString(),
          message?.message?.message?.conversation,
          message?.message?.info?.messagesource?.chat?.user,
          DateFormatter.getFormattedDate(message?.message?.info?.timestamp),
          DateFormatter.getFormattedTime(message?.message?.info?.timestamp),
          'Enviada',
          message?.message?.info?.messagesource?.isfromme,
          'text',
        );

        allMessages.push(newMessage);
        return;
      });

      return allMessages;
    } catch (err) {
      throw new Error('Problems with database');
    }
  }
}
