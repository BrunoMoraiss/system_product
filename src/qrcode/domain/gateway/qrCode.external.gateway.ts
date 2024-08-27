export type qrCode = string;

export interface ProductQrCodeExternalGateway {
  getQrCode(): Promise<qrCode>;
}
