import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';

import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  getHello(@Req() request: Request): string {
    const { ip } = request;

    const logMessage = {
      ip: ip,
      httpVerb: 'GET',
      method: 'get',
      action: 'O objetivo dessa rota é retornar um Hello word.',
    };

    this.logger.log(
      `IP Adress: ${logMessage.ip}; HttpVerb: ${logMessage.httpVerb}; Method: ${logMessage.method}; Action: ${logMessage.action};`,
      'AppController',
    );

    return this.appService.getHello();
  }
}
