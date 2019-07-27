import { Controller, UseGuards, Get, Request } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from 'src/routes/auth/auth.service'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    const {password, ...user} = await this.userService.findOne({id: req.user.id})
    return user
  }

}
