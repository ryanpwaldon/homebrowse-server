import { Injectable } from '@nestjs/common'
import { DomainAgentsListingsService } from '../../modules/domain-agents-listings/domain-agents-listings.service'
import { ListingsResidentialSearchDao } from './dao/ListingsResidentialSearch.dao';
import { ListingsResidentialSearchDto } from './dto/ListingsResidentialSearch.dto';
import { ListingDto } from './dto/Listing.dto';

@Injectable()
export class ListingsService {
  constructor(private readonly domainAgentsListingsService: DomainAgentsListingsService) {}

  async findAll(query) {
    const request = new ListingsResidentialSearchDao(query)
    const response = await this.domainAgentsListingsService.listingsResidentialSearch(request)
    return new ListingsResidentialSearchDto(response).listings
  }

  async findOne(id) {
    const response = await this.domainAgentsListingsService.listing(id)
    return new ListingDto(response)
  }
}
