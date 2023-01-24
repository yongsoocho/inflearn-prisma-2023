import { PostEntity } from './post.entity';
import { ObjectId } from 'bson';
import { UserEntity } from './user.entity';
import { MongoService } from './mongo.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { agent } from 'supertest';

@Controller()
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @Get('user')
  getUsers() {
    return this.mongoService.getUsers();
  }

  @Post('user')
  createUser(@Body() body) {
    console.log(body);

    const payload = new UserEntity.Builder()
      .userId(String(new ObjectId()))
      .age(body.age)
      .height(body.height)
      .build();

    return payload;
    // return this.mongoService.createUser();
  }

  @Post('post')
  createPost(@Body() body) {
    const payload = new PostEntity.Builder()
      .writerId(body.writerId)
      .comments(body.comments)
      .build();

    return this.mongoService.createPost(payload);
  }
}
