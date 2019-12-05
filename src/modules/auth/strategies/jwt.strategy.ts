import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../../config/config.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Configuration } from '../../../config/config.keys';
import { UserRepository } from '../../user/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(UserRepository)
    private readonly authRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get(Configuration.JWTSECRETCODE),
    });
  }

  async validate(payload) {
    const { email } = payload;
    const user = await this.authRepository.findOne({
      where: { email, active: 1 },
    });
    if (!user) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
