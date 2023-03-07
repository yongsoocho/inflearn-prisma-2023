import { Global, Module } from '@nestjs/common';
// import { MongoPrismaService } from './mongo.prisma.service';
import { PostgresPrismaService } from './postgres.prisma.service';

@Global()
@Module({
  providers: [PostgresPrismaService],
  exports: [PostgresPrismaService],
})
export class PrismaModule {}
