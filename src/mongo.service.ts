import { ObjectId } from 'bson';
import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoService {
  constructor(private readonly prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany({});
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
}
