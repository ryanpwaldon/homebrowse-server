import { Injectable } from '@nestjs/common'
import { DomainAgentsListingsService } from 'src/modules/domain-agents-listings/domain-agents-listings.service'
import { extractListings } from './listings.utils';
import { ListingsResidentialSearchDao } from './dao/ListingsResidentialSearch.dao';

@Injectable()
export class ListingsService {
  constructor(private readonly domainAgentsListingsService: DomainAgentsListingsService) {}

  async findAll(query) {
    const request = new ListingsResidentialSearchDao(query)
    const response = await this
      .domainAgentsListingsService
      .listingsResidentialSearch(request)
    return extractListings(response)
  }

  findOne(id) {
    return this.domainAgentsListingsService.listing(id)
  }
}
