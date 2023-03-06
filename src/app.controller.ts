import { UserEntity } from './dto';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return new UserEntity.Builder().userId('yongsoo').name('cho');
  }
}
