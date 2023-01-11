import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUserWithPost() {
    return this.appService.getUserWithPost();
  }

  @Post('user')
  createUser(@Body() body) {
    return this.appService.createUser(body);
  }

  @Delete('user')
  deleteUser(@Query('userId') userId) {
    return this.appService.deleteUser(userId);
  }

  @Patch('user')
  patchUser(@Body() body) {
    return this.appService.patchUser(body);
  }

  @Post('post')
  createPost(@Body() body) {
    return this.appService.createPost(body);
  }
}
