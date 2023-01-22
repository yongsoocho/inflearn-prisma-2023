import { MongoService } from './mongo.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @Get('user')
  getUsers() {
    return this.mongoService.getUsers();
  }

  @Post('user')
  createUser() {
    return this.mongoService.createUser();
  }
}
