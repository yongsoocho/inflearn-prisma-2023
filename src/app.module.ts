import { MongoController } from './mongo.controller';
import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [PrismaModule],
  controllers: [MongoController],
  providers: [MongoService],
})
export class AppModule {}
