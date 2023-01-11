import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { Prisma, User, UserInfo, Post } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getUserWithPost() {
    return this.prisma.user.findUnique({
      where: {
        userId: 50000,
      },
      include: {
        posts: true,
      },
    });
  }

  async deleteUser(userId) {
    const old = await this.prisma.userInfo.deleteMany({
      where: {},
    });

    return old;
  }

  async patchUser(payload) {
    // const newInfo = await this.prisma.userInfo.upsert({
    //   where: {
    //     userId: Number(payload.userId),
    //   },
    //   update: {
    //     height: String(payload.height),
    //   },
    //   create: {
    //     userId: Number(payload.userId),
    //     height: String(payload.height),
    //     weight: Math.round(Math.random() * 100) + 100,
    //     address: faker.address.city(),
    //   },
    // });
    const newInfo = await this.prisma.userInfo.update({
      where: {
        userId: Number(payload.userId),
      },
      data: {
        weight: {
          set: Number(payload.weight),
        },
      },
    });

    return newInfo;
  }

  async createUser(payload: Prisma.UserCreateInput) {
    // prisma객체.모댈table.쿼리({ })
    // 쿼리({}) => {}
    // const newUser = await this.prisma.user.create({
    //   data: {
    //     name: faker.name.firstName(),
    //     email: faker.datatype.uuid(),
    //     profile: faker.lorem.sentences(),
    //     userInfo: {
    //       create: {
    //         height: '174',
    //         weight: 74,
    //         address: faker.address.city(),
    //       },
    //     },
    //   },
    //   include: {
    //     userInfo: true,
    //   },
    // });
    //   data: {
    //     userId: newUser.userId,
    //     height: '174',
    //     weight: 74,
    //     address: faker.address.city(),
    //   },
    // });

    // const data = new Array(1000000).fill({}).map((_) => ({
    //   name: faker.name.firstName().slice(0, 9),
    //   email: faker.datatype.uuid(),
    //   profile: faker.lorem.sentences(),
    // }));

    // const newUser: { count: number } = await this.prisma.user.createMany({
    //   data,
    // });

    const newUser: User = await this.prisma.user.create({
      data: {
        name: payload.name,
        email: faker.datatype.uuid(),
        profile: payload.profile,
        posts: {
          connect: [
            { postId: 5337109 },
            { postId: 5337108 },
            { postId: 5337107 },
          ],
        },
      },
    });

    return newUser;
  }

  async createPost(payload: Prisma.PostUncheckedCreateInput) {
    const newPost: Post = await this.prisma.post.create({
      data: {
        content: faker.lorem.paragraph(),
        // writerId: Math.round(Math.random() * 1000000) + 3,
      },
      include: {
        writer: true,
      },
    });

    return newPost;
  }
}
