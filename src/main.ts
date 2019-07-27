import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cors())
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true }))
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
