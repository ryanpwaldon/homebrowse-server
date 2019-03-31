import { Module, HttpModule } from '@nestjs/common';
import { CorelogicService } from './corelogic.service';

@Module({
  imports: [HttpModule],
  providers: [CorelogicService],
  exports: [CorelogicService]
})
export class CorelogicModule {}
