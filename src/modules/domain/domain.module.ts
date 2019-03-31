import { Module, HttpModule } from '@nestjs/common'
import { DomainService } from './domain.service'

@Module({
  imports: [HttpModule],
  providers: [DomainService],
  exports: [DomainService]
})
export class DomainModule {}
