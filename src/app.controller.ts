import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('notifications')
  getNoti(@Payload() data, @Ctx() ctx) {
    console.log(data, ctx);
    return { data, ctx };
  }
}
