import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class MongoService {
  constructor(private readonly prisma: PrismaService) {}

  findUser() {
    return this.prisma.user.findMany({
      select: {
        userId: true,
        role: true,
        posts: { select: { postId: true, title: true } },
      },
    });
  }

  async createUser(_) {
    const newUser = await this.prisma.user.create({
      data: { age: 0, height: 0, role: 'USER' },
    });

    return newUser;
  }

  async createPost(payload) {
    const newPost = await this.prisma.post.create({
      data: {
        title: faker.lorem.sentence(),
        writerId: payload.writerId,
        comments: [
          {
            userId: payload.writerId,
            content: faker.lorem.sentences(),
          },
          {
            userId: payload.writerId,
            content: faker.lorem.sentences(),
          },
        ],
      },
    });

    return newPost;
  }
}
