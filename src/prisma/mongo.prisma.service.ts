import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@node_modules/.prisma/mongo-client';

@Injectable()
export class MongoPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$connect().then(() => console.log('mongo on!'));
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
