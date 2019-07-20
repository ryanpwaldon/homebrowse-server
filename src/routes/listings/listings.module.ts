import { Module } from '@nestjs/common'
import { ListingsController } from './listings.controller'
import { ListingsService } from './listings.service'
import { DomainAgentsListingsModule } from '../../modules/domain-agents-listings/domain-agents-listings.module'

@Module({
  controllers: [ListingsController],
  providers: [ListingsService],
  imports: [DomainAgentsListingsModule]
})
export class ListingsModule {}
