import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from './config/config.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true }))
  await app.listen(process.env.PORT || app.get(ConfigService).get('PORT'))
}
bootstrap()
