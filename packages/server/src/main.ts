import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Project UME || Challenge')
    .setDescription('O Ojetivo desse desáfio foi para mostrar as experiências e conhecimentos como desenvolvedor full stack.')
    .setVersion('1.0')

    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('ume', app, document);

  await app.listen(3333);
}


bootstrap();
