import { Module } from '@nestjs/common'
import { StatisticsController } from './statistics.controller'
import { StatisticsService } from './statistics.service'
import { DomainPropertiesLocationsModule } from '../../modules/domain-properties-locations/domain-properties-locations.module'
@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
  imports: [DomainPropertiesLocationsModule]
})
export class StatisticsModule {}
