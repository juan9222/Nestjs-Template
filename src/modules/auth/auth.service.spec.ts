import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserRepository } from '../user/user.repository';

describe('AuthService', () => {
  let service: AuthService;
  // TypeOrmModule.forFeature([User, Profile, UserVerification, Address, Currency]),
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserRepository],
      controllers: [AuthController],
      providers: [AuthService, JwtService],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('login true', async () => {
  //   const response = await service.login({ email: 'andresrodriguezsantos44@gmail.com', password: '12345678' });
  //   expect(response.status).toEqual(200);
  // });
  //
  // it('login false', async () => {
  //   const response = await service.login({ email: 'andresrodriguezsantos44@gmail.com', password: '123456' });
  //   expect(response.status).toEqual(401);
  // });

});
