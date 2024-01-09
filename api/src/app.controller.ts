import { Controller, Post, Get, Delete, Body, Param, Res, NotFoundException, UnprocessableEntityException, HttpCode, Logger, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Response } from 'express';
import { AppService } from './app.service';
import { CreateUrlDto } from './url.dto';
import { validateUrl } from './helperFunctions';

@Controller()
@UseGuards(ThrottlerGuard)
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) { }

  @Post()
  createUrl(@Body() data: CreateUrlDto) {
    const { longUrl } = data;

    if (!validateUrl(longUrl)) {
      throw new UnprocessableEntityException('Invalid URL - please ensure the URL you have submitted is valid')
    }

    const response = this.appService.createUrl(longUrl);
    return response;
  }

  @Get(':key')
  async findOneUrl(@Param('key') key: string, @Res() res: Response) {
    const urlObj = await this.appService.getUrl(key);
    if (!urlObj) throw new NotFoundException('Could not find that URL');
    res.redirect(urlObj.long_url)
  }

  @Delete(':key')
  @HttpCode(204)
  async deleteUrl(@Param('key') key: string) {
    const url = await this.appService.getUrl(key);
    if (!url) throw new NotFoundException('Could not find that record to delete'); 
    await this.appService.deleteUrl(key);
  }
}
