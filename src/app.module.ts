import { Module } from '@nestjs/common'
import { ConfigModule } from './modules/config/config.module'
import { StatisticsModule } from './routes/statistics/statistics.module'
import { UserModule } from './routes/user/user.module'
import { DomainModule } from './modules/domain/domain.module'
import { ListingsModule } from './routes/listings/listings.module'

@Module({
  imports: [ConfigModule, StatisticsModule, UserModule, DomainModule, ListingsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
