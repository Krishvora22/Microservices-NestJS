import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule);
  await app.listen(process.env.port ?? 3002);
    console.log(`🚀 Logging service is running on http://localhost:3002`);
}
bootstrap();
