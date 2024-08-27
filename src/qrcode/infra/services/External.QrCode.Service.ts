import {
  ProductQrCodeExternalGateway,
  qrCode,
} from 'src/qrcode/domain/gateway/qrCode.external.gateway';

export class ExternalQrCodeService implements ProductQrCodeExternalGateway {
  async getQrCode(): Promise<qrCode> {
    try {
      const req = await fetch(process.env.URL_WORKER, {
        method: 'GET',
      });

      const res: string = await req.json();

      return res;
    } catch (err) {
      throw new Error('problems with worker');
    }
  }
}
