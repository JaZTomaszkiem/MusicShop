import express from 'express';
import bodtParser from 'body-parser';

import guitarsRoutes from './routes/guitars';

const app = express();

app.use(bodtParser.json());

app.use(guitarsRoutes);

app.listen(3000);
