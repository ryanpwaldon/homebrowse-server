import { Controller, UseGuards, Get, Request } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserService } from './user.service'

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get('profile')
  async getProfile(@Request() req) {
    const {password, ...user} = await this.userService.findOne({id: req.user.id})
    return user
  }

}
