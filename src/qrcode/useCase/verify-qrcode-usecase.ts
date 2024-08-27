import { ProductCacheGateway } from '../domain/gateway/product.cache.gateway';
import { QrCodeEntity } from '../entity/qrCode.enity';
import { UseCase } from './useCase';

import { Inject } from '@nestjs/common';

export type Input = {
  key: string;
};

export type Output = {
  key: string;
  value: string;
};

export class VerifyQrCodeUseCase implements UseCase<Input, Output> {
  constructor(
    @Inject('ProductCacheGateway')
    private readonly productCacheGateway: ProductCacheGateway,
  ) {}
  async execute(input: Input): Promise<Output> {
    const returnCache = await this.productCacheGateway.findOne(input.key);

    QrCodeEntity.validateStatusQrCode(returnCache);

    return returnCache;
  }
}
