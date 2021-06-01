import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler } from '@eaticket-test/common';
import { NotFoundError } from '@eaticket-test/common';
import { createChargeRouter } from './routes/new';

import { userTokenHandler, authHandler } from '@eaticket-test/common';

const cors = require('cors');
const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cors());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV == 'test' ? false : false,
  })
);

app.use(userTokenHandler);
app.use(createChargeRouter);

app.get('/', (req, res) => {
  res.status(200).send('Here is a proxied page!');
});

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
