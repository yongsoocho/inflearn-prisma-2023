// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Patch,
//   Post,
//   Query,
// } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get('user')
//   findUser(@Query('userId') userId, @Query('name') name) {
//     return this.appService.findUser(name, userId);
//   }

//   @Post('user')
//   registerUser(@Body() payload) {
//     return this.appService.registerUser(payload);
//   }

//   @Delete('user')
//   deleteUser() {
//     return this.appService.deleteUser();
//   }

//   @Patch('user')
//   updateUser() {
//     return this.appService.updateUser();
//   }

//   @Post('user/detail')
//   registerUserWithInfo(@Body() payload) {
//     return this.appService.registerUserWithInfo(payload);
//   }

//   @Get('post')
//   postPagnation(@Query('page') page) {
//     return this.appService.postPagnation(Number(page));
//   }

//   @Post('post')
//   createPost(@Body() payload) {
//     return this.appService.createPost(payload);
//   }

//   @Delete('post')
//   deletePost() {
//     return this.appService.deletePost();
//   }

//   @Post('post/connect')
//   createPostConnect(@Body() payload) {
//     return this.appService.createPostConnect(payload);
//   }

//   @Get('trans')
//   transactionPractice() {
//     return this.appService.transactionPractice();
//   }
// }
