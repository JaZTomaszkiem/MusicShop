import express, { Response, Request, NextFunction } from 'express';

import { createErrorFromNative } from './lib/error';
import { respondWithSuccess, closeWithError } from './lib/http';
import routes from './routes';

const app = express();

for (let route of routes) {
  app[route.method.toLowerCase()](
    route.url,
    (req: Request, res: Response, next: NextFunction) => {
      try {
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
