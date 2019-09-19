import { Injectable, BadRequestException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Subscriber } from './subscriber.entity'
import { Repository } from 'typeorm';

@Injectable()
export class SubscriberService {

  constructor (
    @InjectRepository(Subscriber)
    private readonly subscriberRepository: Repository<Subscriber>
  ) {}

  async post(email: string) {
    const subscriber = this.subscriberRepository.create({ email })
    try { return await this.subscriberRepository.save(subscriber) }
    catch (err) { throw new BadRequestException() }
  }
}
