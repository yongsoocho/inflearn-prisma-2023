import { Body, Controller, Delete, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  registerUser(@Body() payload) {
    return this.appService.registerUser(payload);
  }

  @Delete('user')
  deleteUser() {
    return this.appService.deleteUser();
  }

  @Patch('user')
  updateUser() {
    return this.appService.updateUser();
  }

  @Post('user/detail')
  registerUserWithInfo(@Body() payload) {
    return this.appService.registerUserWithInfo(payload);
  }

  @Post('post')
  createPost(@Body() payload) {
    return this.appService.createPost(payload);
  }

  @Delete('post')
  deletePost() {
    return this.appService.deletePost();
  }

  @Post('post/connect')
  createPostConnect(@Body() payload) {
    return this.appService.createPostConnect(payload);
  }
}
