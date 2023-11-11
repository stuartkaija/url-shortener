import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { generateHash, generateShortUrl } from './helperFunctions';
import { UrlEntity } from './url.entity';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private prisma: PrismaService) {}

  async createUrl(longUrl: string): Promise<UrlEntity> {
    const hash = generateHash(longUrl);

    const hashExists = await this.prisma.url.findUnique({
      where: {
        key: hash
      }
    })

    if (hashExists) {
      if (hashExists.long_url === longUrl) {
        return hashExists;
      } else {
        this.logger.warn('Collision!');
        throw new Error('Collision has occurred.');
      }
    }

    const shortUrl = generateShortUrl(hash);

    const result = await this.prisma.url.create({
      data: {
        key: hash,
        long_url: longUrl,
        short_url: shortUrl
      }
    })

    return result;
  }

  async getUrl(key: string): Promise<UrlEntity | null> {
    const url = await this.prisma.url.findUnique({
      where: {
        key: key
      }
    })
    return url;
  }

  async deleteUrl(key: string): Promise<UrlEntity> {
    const result = await this.prisma.url.delete({
      where: {
        key: key
      }
    });

    return result;
  }
}
