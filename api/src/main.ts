import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(helmet());
  app.enableCors({
    origin: 'https://www.lil-url.net'
  });
  await app.listen(3000);
}
bootstrap();
