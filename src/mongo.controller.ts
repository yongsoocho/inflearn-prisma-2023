import { ObjectId } from 'bson';
import { ERole, UserEntity, PostEntity } from './mongo.builder';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { MongoService } from './mongo.service';

@Controller()
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @Get('user')
  findUser() {
    const full = new UserEntity.Builder()
      .userId(String(new ObjectId()))
      .age(26)
      .createdAt(new Date())
      .height(173.1)
      .role(ERole.USER)
      .build();

    return this.mongoService.findUser();
  }

  @Post('user')
  createUser(@Body() body) {
    return this.mongoService.createUser(body);
  }

  @Post('post')
  createPost(@Body() body) {
    const payload = new PostEntity.Builder().writerId(body.userId).build();

    return this.mongoService.createPost(payload);
  }
}
