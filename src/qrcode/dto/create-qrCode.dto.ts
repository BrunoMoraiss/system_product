import { ApiProperty } from '@nestjs/swagger';

export class CreateQrCodeDTO {
  @ApiProperty({
    description: 'Número de telefone que será recebido',
    example: '5511999876543',
  })
  number: string;
}

export class ChangeQrCodeStatusDTO {
  @ApiProperty({
    description: 'Número de telefone que será recebido',
    example: '5511999876543',
  })
  number: string;
  @ApiProperty({
    description:
      'Status que será recebido diretamente do worker após escaneamento do qrCode',
    example: 'success',
  })
  status: 'success' | 'failure';
}
