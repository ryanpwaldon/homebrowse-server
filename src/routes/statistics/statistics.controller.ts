import { Controller, Get, Query } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get()
  suburbStatistics(@Query() query): string {
    this.statisticsService.getSuburbStatistics(query)
    return 'This action returns suburbPerformanceStatistics'
  }
}
