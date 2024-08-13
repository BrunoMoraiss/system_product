export class MessageEntity {
  constructor(
    public idMessage: string,
    public message: string,
    public numberReceived: string,
    public dateSent: string,
    public timeSent: string,
    public status: any = '',
    public isFromMe: boolean,
    public type: string,
  ) {}
}
