import { ExternalQrCodeService } from './infra/services/External.QrCode.Service';
import { QrcodeController } from './qrcode.controller';
import { QrcodeService } from './qrcode.service';
import { CreateQrCodeUseCase } from './useCase/create-qrcode-usecase';
import { VerifyQrCodeUseCase } from './useCase/verify-qrcode-usecase';

import { Module } from '@nestjs/common';
import { CacheService } from 'src/services/tempory-data.service';

@Module({
  controllers: [QrcodeController],
  providers: [
    QrcodeService,
    CreateQrCodeUseCase,
    VerifyQrCodeUseCase,
    {
      provide: 'ProductCacheGateway',
      useClass: CacheService,
    },
    {
      provide: 'ExternalQrCodeService',
      useClass: ExternalQrCodeService,
    },
  ],
})
export class QrcodeModule {}
