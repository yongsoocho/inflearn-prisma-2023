import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  chatCreate() {
    return this.appService.chatCreate();
  }

  @Get('batch')
  batchRetrieve() {
    return this.appService.batchRetrieve();
  }
}
