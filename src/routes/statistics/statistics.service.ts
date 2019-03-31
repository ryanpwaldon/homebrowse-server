import { Injectable } from '@nestjs/common'
import { DomainService } from 'src/modules/domain/domain.service'

@Injectable()
export class StatisticsService {
  constructor(private readonly domainService: DomainService) {}

  getSuburbStatistics(query) {
    this.domainService.getSuburbPerformanceStatistics(query)
  }
}
