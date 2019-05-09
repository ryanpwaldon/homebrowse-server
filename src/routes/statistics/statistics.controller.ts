import { Controller, Get, Query, UseInterceptors, CacheInterceptor } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
@Controller('statistics')
@UseInterceptors(CacheInterceptor)
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get()
  findSuburbStatistics(@Query() query) {
    return this.statisticsService.findSuburbStatistics(query)
  }
}
