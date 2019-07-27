import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '../../../config/config.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
      ignoreExpiration: false
    })
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email }
  }

}