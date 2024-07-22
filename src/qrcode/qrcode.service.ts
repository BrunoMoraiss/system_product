import { CreateQrCodeDTO } from './dto/create-qrCode.dto';

import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/services/tempory-data.service';

@Injectable()
export class QrcodeService {
  constructor(private cacheService: CacheService) {}

  async createQrCode(data: CreateQrCodeDTO) {
    //Lógica para criação do número em cachê
    this.cacheService.instance.set(data.number, 'pendente');
    const allKeys = this.cacheService.instance.keys();
    const allCache = this.cacheService.instance.mget(allKeys);

    //Comunicação Geração QrCode com o Worker
    try {
      const req = await fetch(process.env.URL_WORKER, {
        method: 'GET',
      });

      const res = await req.json();

      return res;
    } catch (err) {
      throw new Error(err);
    }
  }
}
