import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { SecondDatabaseService } from 'src/database/database-second.service';

@Injectable()
export class ContactsService {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    private secondPrismaClient: SecondDatabaseService,
  ) {}
  async getAllContacts(collectionNumber: string) {
    try {
      const collection = this.connection.collection(collectionNumber);
      const distinctNumbers = await collection.distinct(
        'message.info.messagesource.chat.user',
      );

      const formattedNumbers = distinctNumbers.map(
        (number) => `${number}@s.whatsapp.net`,
      );

      const allContacts =
        await this.secondPrismaClient.whatsmeow_contacts.findMany({
          where: {
            their_jid: {
              in: formattedNumbers,
            },
          },
          select: {
            their_jid: true,
            first_name: true,
            full_name: true,
            push_name: true,
          },
        });

      return allContacts;
    } catch (err) {
      throw new Error('Problems with database');
    }
  }
}
