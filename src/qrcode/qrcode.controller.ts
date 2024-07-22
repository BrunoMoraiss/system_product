import { CreateQrCodeDTO } from './dto/create-qrCode.dto';
import { QrcodeService } from './qrcode.service';

import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Post()
  async generateQrCode(@Body() data: CreateQrCodeDTO, @Res() res: Response) {
    let resService;
    try {
      resService = await this.qrcodeService.createQrCode(data);
    } catch (err) {
      return res.send(err).status(400);
    }

    return res.send({ qrCode: resService }).status(201);
  }
}
