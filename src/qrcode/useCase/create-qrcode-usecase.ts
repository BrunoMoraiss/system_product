import { ProductCacheGateway } from '../domain/gateway/product.cache.gateway';
import {
  ProductQrCodeExternalGateway,
  qrCode,
} from '../domain/gateway/qrCode.external.gateway';
import { QrCodeEntity } from '../entity/qrCode.enity';
import { UseCase } from './useCase';

import { Inject, Injectable } from '@nestjs/common';

export type Input = {
  number: string;
};

export type Output = Promise<string>;

@Injectable()
export class CreateQrCodeUseCase implements UseCase<Input, Output> {
  constructor(
    @Inject('ProductCacheGateway')
    private readonly productCacheGateway: ProductCacheGateway,
    @Inject('ExternalQrCodeService')
    private readonly externalQrCodeService: ProductQrCodeExternalGateway,
  ) {}
  async execute(input: Input): Promise<Output> {
    // const getExternalQrCode: qrCode =
    //   await this.externalQrCodeService.getQrCode();

    const qrCode = QrCodeEntity.create({
      qrCodeValue: crypto.randomUUID(),
    });

    this.productCacheGateway.save(input);

    return qrCode.qrCodeValue;
  }
}
