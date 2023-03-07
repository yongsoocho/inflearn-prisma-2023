import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  private _redis;

  constructor() {
    this._redis = new Redis({
      host: 'localhost',
      port: 6379,
    });

    // console.log(this._redis);
  }

  redis() {
    return this._redis;
  }
}
