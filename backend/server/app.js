//impoort packages
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
const dotenv = require('dotenv').config();
// import routes
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
const PORT = 5000;
const HOST = '0.0.0.0';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${process.env.PORT}`);
export default app;
