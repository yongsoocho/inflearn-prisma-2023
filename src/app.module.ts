import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongoModule } from './mongo.module';

@Module({
  imports: [PrismaModule, MongoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
