import { Controller, UseGuards, Get, Request, Param } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserService } from './user.service'
import { ObjectId } from 'mongodb'

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get('profile/:id')
  async getProfile(@Param('id') id) {
    return await this.userService.findOne({ _id: new ObjectId(id) })
  }

}
