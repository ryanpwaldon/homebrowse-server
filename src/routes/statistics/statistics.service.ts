import { Injectable } from '@nestjs/common'
import { DomainPropertiesLocationsService } from 'src/modules/domain-properties-locations/domain-properties-locations.service';

@Injectable()
export class StatisticsService {
  constructor(
    private readonly domainPropertiesLocationsService: DomainPropertiesLocationsService
  ) {}

  async findSuburbStatistics(query) {
    query.suburbId = await this.domainPropertiesLocationsService.addressLocators(query)
    return this.domainPropertiesLocationsService.suburbPerformanceStatistics(query)
  }
}
