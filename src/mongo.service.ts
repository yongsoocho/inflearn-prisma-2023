import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoService {
  constructor(private readonly prisma: PrismaService) {}

  findUser() {
    return this.prisma.user.findMany({});
  }

  async createUser(_) {
    const newUser = await this.prisma.user.create({
      data: { age: 0, height: 0, role: 'USER' },
    });

    return newUser;
  }
}
