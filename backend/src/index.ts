import express, { Response, Request, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { createErrorFromNative } from './lib/error';
import {
  respondWithSuccess,
  closeWithError,
  validateRequestPayload,
} from './lib/http';
import routes from './routes';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json({ strict: true }));

for (let route of routes) {
  app[route.method.toLowerCase()](
    route.url,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (route.schema) {
          req.body = await validateRequestPayload(req.body, route.schema);
        }

        const response = await route.controller(req, res, next);

        return respondWithSuccess(res, response);
      } catch (error: any) {
        return closeWithError(res, createErrorFromNative(error));
      }
    }
  );
}

// app.listen(8080);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.ph7fc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(() => app.listen(PORT, () => console.log(`app running on ${PORT}`)))
  .catch((error) => console.log(error));
