import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';
import { LoggingInterceptorInterceptor } from './common/interceptor/logging-interceptor.interceptor';
import * as useragent from 'useragent';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

fs.mkdir(__dirname + '/logs', { recursive: false }, (err) => {
  fs.mkdir(__dirname + '/logs/response', { recursive: false }, (er) => {
  });
});

async function bootstrap() {
  // process.env.NODE_ENV = 'production';
  const app = await NestFactory.create(AppModule);
  useragent(true);
  app.useGlobalInterceptors(new LoggingInterceptorInterceptor());
  // app.setGlobalPrefix('api/v1');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' });
  app.use(morgan('combined', { stream: accessLogStream }));
  app.use('/web/uploads/', express.static('uploads/'));
  app.listen(AppModule.port, () => {
    console.log(`Servidor escuchando en el puerto ${AppModule.port}`);
  });
}

bootstrap();
