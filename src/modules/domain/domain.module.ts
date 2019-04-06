import { Module } from '@nestjs/common'
import { DomainService } from './domain.service'
import { DomainAgentsListingsModule } from './modules/domain-agents-listings/domain-agents-listings.module';
import { DomainPropertyLocationsModule } from './modules/domain-property-locations/domain-property-locations.module';

@Module({
  imports: [DomainAgentsListingsModule, DomainPropertyLocationsModule],
  providers: [DomainService],
  exports: [DomainService]
})
export class DomainModule {}
