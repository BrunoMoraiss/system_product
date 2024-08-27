export type QrCodeProps = {
  number: string;
};

export interface ProductCacheGateway {
  save(qrCode: QrCodeProps): Promise<void>;
  list(key: string): Promise<{ key: string; value: string }>;
  findOne(key: string): Promise<{ key: string; value: string }>;
}
