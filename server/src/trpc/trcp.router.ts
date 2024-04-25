import { INestApplication, Injectable } from '@nestjs/common';
import { TrcpService } from './trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrcpRouter {
  constructor(private readonly trcpService: TrcpService) {}
  appRouter = this.trcpService.router({
    health: this.trcpService.procedure
      .input(z.string().optional())
      .query((input) => `Health ${input}`),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrcpRouter['appRouter'];
