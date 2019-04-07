import { Injectable } from '@nestjs/common'
import { DomainAgentsListingsService } from 'src/modules/domain-agents-listings/domain-agents-listings.service';

@Injectable()
export class ListingsService {
  constructor(private readonly domainAgentsListingsService: DomainAgentsListingsService) {}

  findAll(query) {
    return this.domainAgentsListingsService.findListingsResidentialSearch(query)
  }

  findOne(id) {
    return this.domainAgentsListingsService.findListing(id)
  }

}
