import { CreateQrCodeDTO } from './dto/create-qrCode.dto';

import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/services/tempory-data.service';

@Injectable()
export class QrcodeService {
  constructor(private cacheService: CacheService) {}

  // async createQrCode(data: CreateQrCodeDTO) {
  //   try {
  //     const req = await fetch(process.env.URL_WORKER, {
  //       method: 'GET',
  //     });

  //     const res = await req.json();

  //     this.cacheService.create(data.number);

  //     return res;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }

  // async changeQrCodeStatus(key: string, status: 'success' | 'failure') {
  //   return this.cacheService.alterStatus(key, status);
  // }
}
