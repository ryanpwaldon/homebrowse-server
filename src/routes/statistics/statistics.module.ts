import { Module, CacheModule } from '@nestjs/common'
import * as redisStore from 'cache-manager-redis-store'
import { StatisticsController } from './statistics.controller'
import { StatisticsService } from './statistics.service'
import { DomainPropertiesLocationsModule } from 'src/modules/domain-properties-locations/domain-properties-locations.module'
@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
  imports: [
    DomainPropertiesLocationsModule,
    CacheModule.register({
      store: redisStore,
      ttl: 100000000000000
    })
  ]
})
export class StatisticsModule {}
