import { Body, Controller, Get, Post } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Controller()
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @Get('user')
  findUser() {
    return this.mongoService.findUser();
  }

  @Post('user')
  createUser(@Body() body) {
    return this.mongoService.createUser(body);
  }
}
