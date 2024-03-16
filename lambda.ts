import { Context } from 'aws-lambda';
import { configure as serverlessExpress } from '@codegenie/serverless-express';
import { createApp, expressServer } from './app';

export const handler = async (event: any, context: Context, callback: any) => {
  const server = serverlessExpress({
    app: async (req, res) => {
      await createApp(expressServer);
      expressServer(req, res);
    },
  });

  return server(event, context, callback);
};
