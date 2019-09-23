import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { User } from '../user/user.entity'
import { CreateUserDto } from '../user/dto/create-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  private createAccessToken (user: User) {
    const payload = { email: user.email, sub: user.id }
    return this.jwtService.sign(payload)
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOne({email})
    if (user && await bcrypt.compare(password, user.password)) return user
    return null
  }

  async register(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10)
    const user = await this.userService.create(createUserDto)
    return { user, accessToken: this.createAccessToken(user) }
  }

  login(user: User) {
    return { user, accessToken: this.createAccessToken(user) }
  }

}
