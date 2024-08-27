import {
  ChangeQrCodeStatusDTO,
  CreateQrCodeDTO,
} from './dto/create-qrCode.dto';
import { VerifyQrCodeDTO } from './dto/verify-qrCode.dto';
import { QrcodeService } from './qrcode.service';
import { CreateQrCodeUseCase } from './useCase/create-qrcode-usecase';
import { VerifyQrCodeUseCase } from './useCase/verify-qrcode-usecase';

import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('qrCode')
@Controller('qrcode')
export class QrcodeController {
  constructor(
    private readonly qrcodeService: QrcodeService,
    private readonly createQrCodeUseCase: CreateQrCodeUseCase,
    private readonly verifyQrCodeUseCase: VerifyQrCodeUseCase,
  ) {}

  @ApiBody({
    required: true,
    type: ChangeQrCodeStatusDTO,
  })
  @ApiOperation({
    summary: 'Faz a alteração do status de sincronização daquele número',
    description:
      'Este endpoint é responsavel por fazer a troca de status daquele número em especifico, ou seja, irá modificar para success ou failure',
  })
  @ApiResponse({
    status: '2XX',
    example: {
      message: 'Key 5511999876543 updated to success',
    },
  })
  @Post('changeStatus')
  async changeQrcodeStatus(
    @Body() data: ChangeQrCodeStatusDTO,
    @Res() res: Response,
  ) {
    // let resService;
    // try {
    //   resService = await this.qrcodeService.changeQrCodeStatus(
    //     data.number,
    //     data.status,
    //   );
    // } catch (err) {
    //   return res.status(200).send({ message: err.message, statusCode: 400 });
    // }
    // return res.status(200).send({ message: resService });
  }

  @ApiBody({
    required: true,
    type: CreateQrCodeDTO,
  })
  @ApiOperation({
    summary: 'Retorna o qrCode vindo direto do worker',
    description:
      'Este endpoint retorna o qrcode que será utilizado para leitura e também cria o status daquele número em cache',
  })
  @ApiResponse({
    status: '2XX',
    example: {
      qrCode:
        'ciocjniwnicrecunucencece-cnre-n-2nc-n-erbceubvioebvuybobb32378hr9348fb948fb8497fb8479bf03b8f03897403874fb08',
    },
  })
  @Post()
  async generateQrCode(
    @Body() { number }: CreateQrCodeDTO,
    @Res() res: Response,
  ) {
    let resService;

    try {
      resService = await this.createQrCodeUseCase.execute({
        number,
      });
    } catch (err) {
      return res.status(200).send({ message: err.message, statusCode: 400 });
    }

    return res.status(201).send({ qrCode: resService });
  }

  @ApiOperation({
    summary: 'Retorna o status de sincronia daquele número em especifico',
    description:
      'Este endpoint retorna se o status se o número do paramtero já foi escaneado com successo, falha ou está pendente',
  })
  @ApiParam({
    name: 'number',
    description: 'Número de telefone que deseja verificar o status',
    example: '5511999876543',
  })
  @ApiResponse({
    status: '2XX',
    example: { number: '5511987876767', status: 'pendent' },
  })
  @Get('verifyStatus/:key')
  async verifyStatus(@Param() params: VerifyQrCodeDTO, @Res() res: Response) {
    try {
      const verifyStatusCache = await this.verifyQrCodeUseCase.execute(params);
      return res.status(200).send(verifyStatusCache);
    } catch (err) {
      return res
        .status(200)
        .send({ errorMessage: err.message, statusCode: 404 });
    }
  }
}
