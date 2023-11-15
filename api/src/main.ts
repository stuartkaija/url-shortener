import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet({
    contentSecurityPolicy: false
  }));
  app.enableCors({
    origin: 'https://lil-url.net'
  });
  await app.listen(3000);
}
bootstrap();
