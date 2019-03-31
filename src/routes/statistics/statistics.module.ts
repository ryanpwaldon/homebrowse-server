import { Module } from '@nestjs/common'
import { StatisticsController } from './statistics.controller'
import { StatisticsService } from './statistics.service'
import { DomainModule } from 'src/modules/domain/domain.module'

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
  imports: [DomainModule]
})
export class StatisticsModule {}
