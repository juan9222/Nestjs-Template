import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto';
import { codeError } from '../../common/codeResponse/codeError';
import * as bCrypt from 'bcrypt';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService) {
  }

  async login(body: LoginDto): Promise<any> {
    const user = await this.findByEmailAndPass(body.email, body.password);
    if (!user) {
      return {
        status: 401,
        data: codeError.inicioSesionError,
      };
    } else if (user.active === 1) {
      const payload = {
        blocked: false,
        email: user.email,
      };
      return {
        status: 200,
        data: await this.jwtService.sign(payload),
      };
    } else {
      return {
        status: 401,
        data: codeError.usuarioInactivo,
      };
    }
  }

  async findByEmailAndPass(email, password): Promise<any> {
    return new Promise(async resolve => {
      const data = await this.userRepository.findOne({
        where: { email },
      });
      if (data != null) {
        if (bCrypt.compareSync(String(password), String(data.password))) {
          resolve(data);
        } else {
          resolve(null);
        }
      }
    });
  }

  async register(body: RegisterDto): Promise<void> {
    const userExists = await this.userRepository.findOne({
      where: [{ email: body.email }],
    });
    if (userExists) {
      throw new ConflictException('user or email already exist');
    }
    // codigo de registro
  }
}
