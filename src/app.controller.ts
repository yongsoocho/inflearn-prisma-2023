// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   ParseIntPipe,
//   Patch,
//   Post,
//   Query,
//   UsePipes,
//   ValidationPipe,
// } from '@nestjs/common';
// import { take } from 'rxjs';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getUserWithPost(@Query('userId') userId) {
//     return this.appService.getUserWithPost(Number(userId));
//   }

//   @Get('user')
//   getUser() {
//     return this.appService.getUser();
//   }

//   @Post('user')
//   createUser(@Body() body) {
//     return this.appService.createUser(body);
//   }

//   @Delete('user')
//   deleteUser(@Query('userId') userId) {
//     return this.appService.deleteUser(userId);
//   }

//   @Patch('user')
//   patchUser(@Body() body) {
//     return this.appService.patchUser(body);
//   }

//   @Get('post')
//   getPostsWithPagination(
//     @Query('page') page: number,
//     @Query('take') take: number,
//   ) {
//     console.log(page, take, typeof page, typeof take);
//     return this.appService.getPostsWithPagination(Number(page), Number(take));
//   }

//   @Post('post')
//   createPost(@Body() body) {
//     return this.appService.createPost(body);
//   }
// }
