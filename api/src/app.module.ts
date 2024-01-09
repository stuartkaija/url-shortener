import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 100,
    }])
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
