import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@node_modules/.prisma/postgre-client';

@Injectable()
export class PostgresPrismaService
  extends PrismaClient
  implements OnModuleInit
{
  async onModuleInit() {
    this.$connect().then(() => console.log('postgres on!'));
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
