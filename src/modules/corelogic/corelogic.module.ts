import { Module, HttpModule } from '@nestjs/common';
import { CoreLogicService } from './corelogic.service';

@Module({
  imports: [HttpModule],
  providers: [CoreLogicService],
  exports: [CoreLogicService]
})
export class CoreLogicModule {}
