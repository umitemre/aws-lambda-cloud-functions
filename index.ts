import { createApp, expressServer } from './app';
import { INestApplication } from '@nestjs/common';

let app: INestApplication;
exports.api = async (req, res) => {
  if (!app) {
    app = await createApp(expressServer);
  }

  expressServer(req, res);
};
