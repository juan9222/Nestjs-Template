import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

describe('Auth Controller', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  // it('login true', async () => {
  //   const response = await controller.login({ email: 'andresrodriguezsantos44@gmail.com', password: '12345678' });
  //   console.log('==========> el login ', response);
  //   expect(response.status).toEqual(200);
  // });
  // it('login false', async () => {
  //   const response = await controller.login({ email: 'andresrodriguezsantos44@gmail.com', password: '123456' });
  //   expect(response.status).toEqual(401);
  // });
  // it('login password o email vacio', async () => {
  //   const response = await controller.login({ email: 'andresrodriguezsantos44@gmail.com', password: null });
  //   const response2 = await controller.login({ email: null, password: '12345678' });
  //   console.log('===========> el response ', response);
  //   console.log('===========> el response2 ', response2);
  // });

});
