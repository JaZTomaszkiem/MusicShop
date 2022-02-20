import express, { Response, Request, NextFunction } from 'express';

import { createErrorFromNative } from './lib/error';
import {
  respondWithSuccess,
  closeWithError,
  validateRequestPayload,
} from './lib/http';
import routes from './routes';

const app = express();

app.use(express.json({ strict: true }));

for (let route of routes) {
  app[route.method.toLowerCase()](
    route.url,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (route.schema) {
          req.body = await validateRequestPayload(req.body, route.schema);
        }

        const response = route.controller(req, res, next);

        return respondWithSuccess(res, response);
      } catch (error: any) {
        return closeWithError(res, createErrorFromNative(error));
      }
    }
  );
}

app
  .listen(8080, () => {
    console.log('Server listening on port 8080');
  })
  .on('error', (error) => {
    console.log(error);
  });
