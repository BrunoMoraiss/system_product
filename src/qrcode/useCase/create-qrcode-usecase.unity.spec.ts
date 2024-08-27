import { CreateQrCodeUseCase } from './create-qrcode-usecase';

const MockRepositoryExternal = () => {
  return {
    getQrCode: jest.fn().mockReturnValue(Promise.resolve('testeQrCode')),
  };
};

const MockRepositoryGatewayCache = {
  save: jest.fn().mockResolvedValue(undefined),
  list: jest.fn(),
  findOne: jest.fn(),
};

describe('create a qrCode UseCase', () => {
  let createQrCodeUseCase: CreateQrCodeUseCase;

  beforeEach(async () => {
    const MockRepositoryExternalT = MockRepositoryExternal();
    createQrCodeUseCase = new CreateQrCodeUseCase(
      MockRepositoryGatewayCache,
      MockRepositoryExternalT,
    );
  });

  it('should return a createQrCode success', async () => {
    const inputDto = {
      number: '55119888882222',
    };
    const returnCreateQrCodeUseCase =
      await createQrCodeUseCase.execute(inputDto);

    expect(returnCreateQrCodeUseCase).toEqual('string');
  });
});
