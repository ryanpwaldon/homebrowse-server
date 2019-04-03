import { Injectable } from '@nestjs/common'
import { DomainService } from 'src/modules/domain/domain.service'

@Injectable()
export class ListingsService {
  constructor(private readonly domainService: DomainService) {}

  findAll(query) {
    return this.domainService.findListings(query)
  }

  findOne(id) {
    return this.domainService.findListing(id)
  }

}
