import mongoose from 'mongoose';

import { app } from './app';
import { natsWrapper } from '../src/nats-wrapper';

import { TicketCreatedListener } from './events/listeners/ticket-created-listener';
import { TicketUpdatedListener } from './events/listeners/ticket-updated-listener';
import { ExpirationCompleteListener } from './events/listeners/expiration-complete-listener';
import { PaymentCreatedListener } from './events/listeners/payment-created-listener';

const start = async () => {
  //check env variables defined
  if (!process.env.SIGNING_KEY) {
    throw new Error('JWT SIGNING KEY NOT DEFINED');
  }

  if (!process.env.MONGO_SERVER_NAME) {
    throw new Error('Mongo Database Name not defined!');
  }

  if (!process.env.NATS_CLUSTER) {
    throw new Error('NATS env variable not defined!');
  }

  if (!process.env.NATS_CLIENT_ID) {
    throw new Error('NATS env variable not defined!');
  }

  if (!process.env.NATS_URL) {
    throw new Error('NATS env variable not defined!');
  }

  try {
    await mongoose.connect(`${process.env.MONGO_SERVER_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('connected to mongoDB!');

    await natsWrapper.connect(
      process.env.NATS_CLUSTER,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );

    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });

    process.on('SIGINT', () => {
      natsWrapper.client.close();
    });

    process.on('SIGTERM', () => {
      natsWrapper.client.close();
    });

    new TicketCreatedListener(natsWrapper.client).listen();
    new TicketUpdatedListener(natsWrapper.client).listen();
    new ExpirationCompleteListener(natsWrapper.client).listen();
    new PaymentCreatedListener(natsWrapper.client).listen();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000!');
  });
};

start();
