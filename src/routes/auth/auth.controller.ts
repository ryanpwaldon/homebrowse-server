import { Controller, UseGuards, Request, Post, Body, Get } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from 'src/routes/auth/auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Get('status')
  @UseGuards(AuthGuard('jwt'))
  async checkAuthStatus(@Request() req) {
    return req.user
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
