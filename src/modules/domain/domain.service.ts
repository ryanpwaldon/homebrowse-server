import { Injectable } from '@nestjs/common'
import { DomainAgentsListingsService } from './modules/domain-agents-listings/domain-agents-listings.service';
import { DomainPropertyLocationsService } from './modules/domain-property-locations/domain-property-locations.service';

@Injectable()
export class DomainService {

  constructor (
    private readonly domainAgentsListingsService: DomainAgentsListingsService,
    private readonly domainPropertyLocationsService: DomainPropertyLocationsService
  ) {}

  async findSuburbStatistics(query) {
    query.suburbId = await this.domainPropertyLocationsService.findAddressLocatorsDto(query)
    return this.domainPropertyLocationsService.findSuburbPerformanceStatistics(query)
  }

  findListings(query) {
    return this.domainAgentsListingsService.findListingsResidentialSearch(query)
  }

  findListing(id) {
  }
}
