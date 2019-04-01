import { Module } from '@nestjs/common'
import { ListingsController } from './listings.controller'
import { ListingsService } from './listings.service'
import { DomainModule } from 'src/modules/domain/domain.module'

@Module({
  controllers: [ListingsController],
  providers: [ListingsService],
  imports: [DomainModule]
})
export class ListingsModule {}
