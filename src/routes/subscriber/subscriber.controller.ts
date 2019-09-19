import { Controller, Post, Body } from '@nestjs/common'
import { SubscriberService } from './subscriber.service'

@Controller('subscriber')
export class SubscriberController {
  constructor (
    private readonly subscriberService: SubscriberService
  ) {}

  @Post()
  async post(@Body('email') email) {
    return await this.subscriberService.post(email)
  }
}
