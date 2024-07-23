import {
  ChangeQrCodeStatusDTO,
  CreateQrCodeDTO,
} from './dto/create-qrCode.dto';
import { QrcodeService } from './qrcode.service';

import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Post('changeStatus')
  async changeQrcodeStatus(
    @Body() data: ChangeQrCodeStatusDTO,
    @Res() res: Response,
  ) {
    let resService;

    try {
      resService = await this.qrcodeService.changeQrCodeStatus(
        data.number,
        data.status,
      );
    } catch (err) {
      return res.status(200).send({ message: err.message, statusCode: 400 });
    }

    return res.status(200).send({ message: resService });
  }

  @Post()
  async generateQrCode(@Body() data: CreateQrCodeDTO, @Res() res: Response) {
    let resService;

    try {
      resService = await this.qrcodeService.createQrCode(data);
    } catch (err) {
      return res.status(200).send({ message: err.message, statusCode: 400 });
    }

    return res.status(201).send({ qrCode: resService });
  }

  @Get('verifyStatus/:number')
  async verifyStatus(@Param('number') number: string, @Res() res: Response) {
    const verifyStatusCache =
      await this.qrcodeService.verifyQrCodeStatus(number);

    return res.status(200).send({ number, status: verifyStatusCache });
  }
}
