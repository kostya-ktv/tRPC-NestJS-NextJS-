import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrcpRouter } from './trpc/trcp.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const trpc = app.get(TrcpRouter);
  trpc.applyMiddleware(app);

  const PORT = process.env.PORT || 4000;
  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
bootstrap();
