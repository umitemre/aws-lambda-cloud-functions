import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

export const expressServer = express();

export const createApp = async function (
  expressInstance?,
): Promise<INestApplication> {
  let app: INestApplication;

  if (expressInstance === undefined) {
    app = await NestFactory.create(AppModule);
  } else {
    app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressInstance),
    );
  }

  await app.init();

  return app;
};
