import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';

@Injectable()
export class CacheService {
  private cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
  }

  get instance(): NodeCache {
    return this.cache;
  }

  create(key: string) {
    this.cache.set(key, 'pendent', 60 * 3);
    return 'Cache criado';
  }

  findOne(key: string) {
    const returnKeyCache = this.cache.get(key);
    return returnKeyCache;
  }

  alterStatus(key: string, success: 'success' | 'failure') {
    if (this.cache.has(key)) {
      this.cache.set(key, success);

      return `Key ${key} updated to ${success}`;
    } else {
      return `Key ${key} not found`;
    }
  }

  delete(key: string) {
    this.cache.del(key);
    return `Key: ${key} Deletado`;
  }
}
