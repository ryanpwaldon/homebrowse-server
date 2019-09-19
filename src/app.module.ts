import { Module } from '@nestjs/common'
import { ConfigModule } from './config/config.module'
import { DomainAgentsListingsModule } from './modules/domain-agents-listings/domain-agents-listings.module'
import { DomainPropertiesLocationsModule } from './modules/domain-properties-locations/domain-properties-locations.module'
import { AuthModule } from './routes/auth/auth.module'
import { UserModule } from './routes/user/user.module'
import { ListingsModule } from './routes/listings/listings.module'
import { StatisticsModule } from './routes/statistics/statistics.module'
import { SubscriberModule } from './routes/subscriber/subscriber.module'
import { ConfigService } from './config/config.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule,
    DomainAgentsListingsModule,
    DomainPropertiesLocationsModule,
    AuthModule,
    UserModule,
    ListingsModule,
    StatisticsModule,
    SubscriberModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get('MONGO_URL'),
        entities: [join(__dirname, '**/**.entity{.ts,.js}')],
        useNewUrlParser: true,
        synchronize: true,
        ssl: true
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
