export type CreateQrCodeDTO = {
  number: string;
};

export type ChangeQrCodeStatusDTO = {
  number: string;
  status: 'success' | 'failure';
};
