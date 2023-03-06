import { Global, Module } from '@nestjs/common';
import { MongoPrismaService } from './mongo.prisma.service';
import { PostgresPrismaService } from './postgres.prisma.service';

@Global()
@Module({
  providers: [MongoPrismaService, PostgresPrismaService],
  exports: [MongoPrismaService, PostgresPrismaService],
})
export class PrismaModule {}
