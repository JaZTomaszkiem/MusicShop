//impoort packages
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
const dotenv = require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// import routes

import usersRouter from './routes/users';
import guitarRouter from './routes/guitar';

const app = express();

//use middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      description: 'A simple Express Library API',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: [`${__dirname}/docs/*.js`],
};
let test = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(test));
//use router

app.use('/users', usersRouter);
app.use('/guitar', guitarRouter);

// app.use(bodyParser.json({ limit: '30mb', extends: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extends: true }));
const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kz7da.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => app.listen(PORT, () => console.log(`app runing on ${PORT}`)))
  .catch(error => console.log(error));
export default app;
