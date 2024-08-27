import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';
import { ProductCacheGateway } from 'src/qrcode/domain/gateway/product.cache.gateway';

export type QrCodeProps = {
  number: string;
};

@Injectable()
export class CacheService implements ProductCacheGateway {
  private cache: NodeCache;
  constructor() {
    this.cache = new NodeCache();
  }
  async findOne(key: string): Promise<{ key: string; value: string }> {
    const getCache: string = await this.cache.get(key);

    if (getCache) {
      const returnCache = {
        key,
        value: getCache,
      };

      return returnCache;
    }
  }

  async list(key: string): Promise<{ key: string; value: string }> {
    const returnCache: { key: string; value: string } =
      await this.cache.get(key);

    return returnCache;
  }

  async save(qrCode: QrCodeProps): Promise<void> {
    this.cache.set(qrCode.number, 'pendent');
    return;
  }

  // get instance(): NodeCache {
  //   return this.cache;
  // }
  // create(key: string) {
  //   this.cache.set(key, 'pendent', 60 * 3);
  //   return 'Cache criado';
  // }
  // findOne(key: string) {
  //   const returnKeyCache = this.cache.get(key);
  //   return returnKeyCache;
  // }
  // alterStatus(key: string, success: 'success' | 'failure') {
  //   if (this.cache.has(key)) {
  //     this.cache.set(key, success);
  //     return `Key ${key} updated to ${success}`;
  //   } else {
  //     return `Key ${key} not found`;
  //   }
  // }
  // delete(key: string) {
  //   this.cache.del(key);
  //   return `Key: ${key} Deletado`;
  // }
}
