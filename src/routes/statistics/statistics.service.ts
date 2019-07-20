import { Injectable } from '@nestjs/common'
import { DomainPropertiesLocationsService } from '../../modules/domain-properties-locations/domain-properties-locations.service';
import { AddressLocatorsDao } from './dao/AddressLocators.dao';
import { SuburbPerformanceStatisticsDao } from './dao/SuburbPerformanceStatistics.dao';
import { SuburbStatisticsDto } from './dto/SuburbStatistics.dto';

@Injectable()
export class StatisticsService {
  constructor(
    private readonly domainPropertiesLocationsService: DomainPropertiesLocationsService
  ) {}

  async findSuburbStatistics(query) {
    const addressLocatorsResponse = await this
      .domainPropertiesLocationsService
      .addressLocators(new AddressLocatorsDao(query))
    const suburbId = addressLocatorsResponse[0]
      .ids[0]
      .id
    const suburbPerformanceStatisticsResponse = await this
      .domainPropertiesLocationsService
      .suburbPerformanceStatistics(new SuburbPerformanceStatisticsDao({ ...query, suburbId }))
    return new SuburbStatisticsDto(suburbPerformanceStatisticsResponse).series
  }
}
