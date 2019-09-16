import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard('jwt'))
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get()
  findSuburbStatistics(@Query() query) {
    return this.statisticsService.findSuburbStatistics(query)
  }
}
