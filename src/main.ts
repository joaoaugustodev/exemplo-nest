import { NestFactory } from '@nestjs/core';
import { ModuleDefault } from '@/conf/module-default';

async function bootstrap() {
  const app = await NestFactory.create(ModuleDefault);
  await app.listen(3000);
}
bootstrap();
