import { Controller, UseGuards, Request, Post, Body, Get } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { UserService } from '../user/user.service'
import { ObjectId } from 'mongodb'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Get('status')
  @UseGuards(AuthGuard('jwt'))
  async checkAuthStatus(@Request() req) {
    const userProfile = await this.userService.findOne({ _id: new ObjectId (req.user.userId) })
    const accessToken = this.authService.createAccessToken(userProfile)
    return { userProfile, accessToken }
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto)
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

}
