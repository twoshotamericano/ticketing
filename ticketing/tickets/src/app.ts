import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler } from '@eaticket-test/common';
import { NotFoundError } from '@eaticket-test/common';
import { NewTicketRouter } from '../src/routes/new';
import { createTicketRouterTest } from '../src/routes/other';
import { userTokenHandler, authHandler } from '@eaticket-test/common';
import { ShowTicketRouter } from '../src/routes/show';
import { IndexTicketRouter } from '../src/routes/index';
import { UpdateTicketRouter } from '../src/routes/update';

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

app.use(NewTicketRouter);
app.use(ShowTicketRouter);
app.use(IndexTicketRouter);
app.use(createTicketRouterTest);
app.use(UpdateTicketRouter);

app.get('/', (req, res) => {
  res.status(200).send('Here is a proxied page!');
});

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
