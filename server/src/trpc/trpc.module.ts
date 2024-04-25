import { Module } from '@nestjs/common';
import { TrcpService } from './trpc.service';
import { TrcpRouter } from './trcp.router';

@Module({
  imports: [],
  controllers: [],
  providers: [TrcpService, TrcpRouter],
})
export class TrpcModule {}
