import { Module } from '@nestjs/common'
import { DomainPropertiesLocationsService } from './domain-properties-locations.service'

@Module({
  providers: [DomainPropertiesLocationsService],
  exports: [DomainPropertiesLocationsService]
})
export class DomainPropertiesLocationsModule {}
