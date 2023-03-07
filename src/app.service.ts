import { RedisService } from './redis.service';
import { Injectable } from '@nestjs/common';
import { PostgresPrismaService } from './prisma/postgres.prisma.service';

@Injectable()
export class AppService {
  constructor(
    private readonly rd: RedisService,
    private readonly postgrePrisma: PostgresPrismaService,
  ) {}

  async getHello() {
    const cacheData = await this.rd.redis().get('message:cache');

    if (cacheData) {
      console.log('cache!');
      return JSON.parse(cacheData);
    }

    console.log('non-cache!');

    const data = await this.postgrePrisma.message.findMany({});

    await this.rd.redis().set('message:cache', JSON.stringify(data));

    return data;
  }

  async chatCreate() {
    const payload = {
      userId:
        Math.random() > 0.5
          ? '27cfd7a7-bd6b-4a58-a020-2f72d7c19b51'
          : '8c67c72d-f6ea-4022-a944-e9c09882cc31',
      roomId: '6be60231-feaa-43c0-99ad-23e728c5cc51',
      message: Math.random() > 0.5 ? 'yongsoo here!' : 'soo yong ~ here',
    };

    return this.rd.redis().rpush('message:list', JSON.stringify(payload));
  }

  // multi - BEGIN exec - COMMIT [[status, result], query2 ...]
  async batchRetrieve() {
    const result = await this.rd
      .redis()
      .multi()
      .lrange('message:list', 0, -1)
      .ltrim('message:list', -1, 0)
      .exec()
      .then(([[_, data], __]) => data.map((e) => JSON.parse(e)));

    return this.postgrePrisma.message.createMany({
      data: result,
    });
  }
}
