import { Module } from '@nestjs/common'
import { DomainAgentsListingsService } from './domain-agents-listings.service'

@Module({
  providers: [DomainAgentsListingsService],
  exports: [DomainAgentsListingsService]
})
export class DomainAgentsListingsModule {}
