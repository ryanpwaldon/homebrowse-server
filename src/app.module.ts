import { Module } from '@nestjs/common'
import { ConfigModule } from './config/config.module'
import { StatisticsModule } from './routes/statistics/statistics.module'
import { UserModule } from './routes/user/user.module'
import { DomainAgentsListingsModule } from './modules/domain-agents-listings/domain-agents-listings.module'
import { DomainPropertiesLocationsModule } from './modules/domain-properties-locations/domain-properties-locations.module'
import { ListingsModule } from './routes/listings/listings.module'

@Module({
  imports: [ConfigModule, StatisticsModule, UserModule, DomainAgentsListingsModule, DomainPropertiesLocationsModule, ListingsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
