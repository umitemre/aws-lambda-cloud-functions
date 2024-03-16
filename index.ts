import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';

let app: INestApplication;
const expressServer = express();

exports.api = async (req, res) => {
  if (!app) {
    app = await createApp(expressServer);
  }

  expressServer(req, res);
};

const createApp = async function (expressInstance?): Promise<INestApplication> {
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

export const randomString = Math.random().toString(36).substring(7);
