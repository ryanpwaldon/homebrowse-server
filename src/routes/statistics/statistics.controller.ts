import { Controller, Get, Query } from '@nestjs/common'
import { StatisticsService } from './statistics.service'

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get()
  findSuburbStatistics(@Query() query) {
    return this.statisticsService.findSuburbStatistics(query)
  }
}
