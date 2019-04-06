import { Module, HttpModule } from '@nestjs/common';
import { DomainAgentsListingsService } from './domain-agents-listings.service';

@Module({
  imports: [HttpModule],
  providers: [DomainAgentsListingsService],
  exports: [DomainAgentsListingsService]
})
export class DomainAgentsListingsModule {}
