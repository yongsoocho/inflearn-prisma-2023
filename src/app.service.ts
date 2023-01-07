import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Prisma, UserInfo } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async findUser(name, userId) {
    // const result = await this.prisma.user.findUnique({
    //   where: {
    //     userId: Number(userId),
    //   },
    // });

    const result = await this.prisma.user.findMany({
      where: { name },
      select: {
        name: true,
        email: true,
        userInfo: {
          select: {
            height: true,
            weight: true,
          },
        },
        posts: {
          select: {
            postId: true,
            content: true,
          },
        },
      },
    });

    if (!result || !result.length) {
      return '결과없음';
    }

    return result;
  }

  async registerUser(payload: Prisma.UserCreateInput) {
    // return this.prisma.user.create({
    //   data: {
    //     // name: payload.name ?? '이름없음',
    //     name:
    //       Math.random() > 0.5 ? faker.name.fullName().slice(0, 9) : '이름없음',
    //     email: faker.internet.email(),
    //     profile: faker.lorem.lines(),
    //     posts: {
    //       connect: [
    //         { postId: 11 },
    //         { postId: 12 },
    //         { postId: 13 },
    //         { postId: 14 },
    //         { postId: 15 },
    //         { postId: 16 },
    //       ],
    //     },
    //   },
    // });
    const data: Prisma.UserCreateInput[] = new Array(1000000)
      .fill({})
      .map((e) => ({
        name: faker.name.fullName().slice(0, 9),
        email: faker.internet.email(),
        profile: faker.lorem.sentences(),
      }));

    return this.prisma.user.createMany({ data });
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
    // return this.prisma.userInfo.update({
    //   where: { userId: 999 },
    //   data: { weight: { set: 10 } },
    // });
    return this.prisma.user.upsert({
      where: {
        userId: 32,
      },
      update: {
        name: 'upsert!',
      },
      create: {
        name: 'upsert@',
        email: '@inflearn.com',
        profile: 'watch my profile!',
      },
    });
  }

  registerUserWithInfo(payload: Prisma.UserCreateInput) {
    // return this.prisma.user.create({
    //   data: {
    //     name:
    //       Math.random() > 0.5 ? faker.name.fullName().slice(0, 9) : '이름없음',
    //     email: faker.internet.email(),
    //     profile: faker.lorem.lines(),
    //     userInfo: {
    //       create: {
    //         height: '173',
    //         weight: 80,
    //         address: faker.address.buildingNumber(),
    //       },
    //     },
    //   },
    // });
    let i = 1000277;
    const data = [];
    while (i <= 2000276) {
      data.push({
        userId: i,
        height: String(faker.datatype.number({ min: 100, max: 200 })),
        weight: faker.datatype.number({ min: 40, max: 200 }),
        address: faker.address.city(),
      });
      i++;
    }
    return this.prisma.userInfo.createMany({
      data,
    });
  }

  async postPagnation(page) {
    const [count, posts] = await Promise.all([
      this.prisma.post.count(),
      this.prisma.post.findMany({
        take: 10,
        skip: 10 * (page - 1),
        orderBy: {
          postId: 'desc',
        },
      }),
    ]);

    return { count, current: page, posts };
  }

  createPost(payload) {
    const data: Prisma.PostUncheckedCreateInput[] = new Array(1000000)
      .fill({})
      .map(() => ({
        writerId: Math.round(Math.random() * 1000000) + 1000277,
        content: faker.lorem.paragraph(),
      }));
    return this.prisma.post.createMany({
      data,
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
