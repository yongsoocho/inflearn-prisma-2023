import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  registerUser(payload: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: {
        // name: payload.name ?? '이름없음',
        name:
          Math.random() > 0.5 ? faker.name.fullName().slice(0, 9) : '이름없음',
        email: faker.internet.email(),
        profile: faker.lorem.lines(),
        posts: {
          connect: [
            { postId: 11 },
            { postId: 12 },
            { postId: 13 },
            { postId: 14 },
            { postId: 15 },
            { postId: 16 },
          ],
        },
      },
    });
  }

  deleteUser() {
    return this.prisma.user.delete({
      where: {
        userId: 30,
      },
    });
  }

  updateUser() {
    // return this.prisma.user.update({
    //   where: { userId: 1 },
    //   data: { name: 'unknown' },
    // });
    return this.prisma.userInfo.update({
      where: { userId: 999 },
      data: { weight: { set: 10 } },
    });
  }

  registerUserWithInfo(payload: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: {
        name:
          Math.random() > 0.5 ? faker.name.fullName().slice(0, 9) : '이름없음',
        email: faker.internet.email(),
        profile: faker.lorem.lines(),
        userInfo: {
          create: {
            height: '173',
            weight: 80,
            address: faker.address.buildingNumber(),
          },
        },
      },
    });
  }

  createPost(payload) {
    // const posts: Prisma.PostUncheckedCreateInput[] = new Array(20)
    //   .fill({})
    //   .map((e) => ({
    //     writerId: Math.round(Math.random() * 100),
    //     content: faker.lorem.paragraph(),
    //   }));

    // return posts;
    return this.prisma.post.create({
      data: {
        writerId: Math.round(Math.random() * 21),
        content: faker.lorem.paragraph(),
      },
    });
  }

  deletePost() {
    // const data = [
    //   { height: '123', weight: 80, address: 'string', userId: 1 },
    //   { height: '123', weight: 80, address: 'string', userId: 2 },
    //   { height: '123', weight: 80, address: 'string', userId: 3 },
    //   { height: '123', weight: 80, address: 'string', userId: 4 },
    //   { height: '123', weight: 80, address: 'string', userId: 5 },
    // ];
    // return this.prisma.userInfo.createMany({
    //   data,
    // });
    return this.prisma.userInfo.deleteMany({});
  }

  createPostConnect(payload) {
    return;
  }
}
