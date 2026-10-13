import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.enableShutdownHooks()


  const config = new DocumentBuilder()
     .setTitle('API Courier')
     .setDescription('Courier Description')
     .setVersion('1.0')
     .addTag('cats')
     .build();
   const documentFactory = () => SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, documentFactory);
   
await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
