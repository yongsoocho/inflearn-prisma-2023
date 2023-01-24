import { faker } from '@faker-js/faker';
import { ObjectId } from 'bson';
import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoService {
  constructor(private readonly prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany({
      select: {
        userId: true,
        posts: {
          select: {
            title: true,
            comments: {
              select: {
                content: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });
  }

  async createUser() {
    const newUser = await this.prisma.user.create({
      data: {
        userId: String(new ObjectId()),
        age: 0,
        height: 10.0,
        role: 'USER',
      },
    });

    return newUser;
  }

  async createPost(payload) {
    const newPost = await this.prisma.post.create({
      data: {
        title: faker.lorem.sentence(),
        writerId: payload.writerId,
        comments: payload.comments,
      },
    });

    return newPost;
  }
}
