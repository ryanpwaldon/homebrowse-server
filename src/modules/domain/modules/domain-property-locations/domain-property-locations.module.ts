import { Module, HttpModule } from '@nestjs/common';
import { DomainPropertyLocationsService } from './domain-property-locations.service';

@Module({
  imports: [HttpModule],
  providers: [DomainPropertyLocationsService],
  exports: [DomainPropertyLocationsService]
})
export class DomainPropertyLocationsModule {}
