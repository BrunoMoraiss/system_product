export type QrCodeProps = {
  qrCodeValue: string;
};

export class QrCodeEntity {
  private constructor(private readonly qrCode: QrCodeProps) {
    this.isValid();
  }

  public static create(qrCode: QrCodeProps) {
    return new QrCodeEntity(qrCode);
  }

  public get qrCodeValue() {
    return this.qrCode.qrCodeValue;
  }

  public isValid() {
    if (this.qrCodeValue == undefined || this.qrCodeValue == null) {
      throw new Error("QrCode doesn't exist");
    }
  }

  static validateStatusQrCode(input: { key: string; value: string }) {
    if (!input) {
      throw new Error('Cache Invalid');
    }
  }
}
