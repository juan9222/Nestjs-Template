import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('/register')
  async register(@Body() body: RegisterDto): Promise<void> {
    return this.authService.register(body);
  }

  @Post('/login')
  async login(@Body() body: LoginDto): Promise<any> {
    return this.authService.login(body);
  }
}
