import { Module } from '@nestjs/common'
import { SubscriberController } from './subscriber.controller'
import { SubscriberService } from './subscriber.service'
import { Subscriber } from './subscriber.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  controllers: [SubscriberController],
  providers: [SubscriberService]
})
export class SubscriberModule {}
