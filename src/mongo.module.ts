import { Module } from '@nestjs/common';
import { MongoController } from './mongo.controller';
import { MongoService } from './mongo.service';

@Module({
  controllers: [MongoController],
  providers: [MongoService],
})
export class MongoModule {}
