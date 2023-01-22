import { faker } from '@faker-js/faker';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User, UserInfo, Post } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserWithPost(userId) {
    const exUser = await this.prisma.user.findUnique({
      where: {
        USER_PRO_EMAIL_UNIQ: {
          provider: 'ETC',
          email: 'a670c880-cc43-4938-8250-da63e9498aca',
        },
      },
    });

    if (!exUser || (Array.isArray(exUser) && !exUser.length)) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }

    return exUser;
  }

  async getUser() {
    const exUser = await this.prisma.user.findMany({
      where: {
        AND: [
          {
            userInfo: {
              height: {
                in: ['180', '181', '182', '183'],
              },
            },
          },
          {
            userInfo: {
              weight: {
                gte: 100,
              },
            },
          },
        ],
      },
      include: {
        userInfo: true,
      },
      take: 10,
    });

    return exUser;
  }

  async deleteUser(userId) {
    const old = await this.prisma.userInfo.deleteMany({
      where: {},
    });

    return old;
  }

  async patchUser(payload) {}

  async getPostsWithPagination(page, take) {
    const [count, posts] = await Promise.all([
      this.prisma.post.count(),
      this.prisma.post.findMany({
        take, // 몇개 불러오는지
        skip: take * (page - 1),
        orderBy: {
          postId: 'desc',
        },
      }),
    ]);

    return {
      currentPage: page,
      totalPage: Math.ceil(count / take),
      posts,
    };
  }

  async createUser(payload: Prisma.UserCreateInput) {}

  async createPost(payload: any) {
    const result = await this.prisma.$transaction(async (ctx) => {
      const newUser = await ctx.user.create({
        data: {
          name: 'yongsoo!!',
          email: faker.datatype.uuid(),
          profile: 'hello world',
        },
      });

      const result = await ctx.post.findMany({
        where: {
          writerId: newUser.userId,
        },
      });

      return [newUser, result];
    });

    return result;
  }
}
