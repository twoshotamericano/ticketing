import mongoose from 'mongoose';
import { OrderCreatedListener } from './events/listenters/order-created-listener';
import { OrderCancelledListener } from './events/listenters/order-cancelled-listener';

import { app } from './app';
import { natsWrapper } from '../src/nats-wrapper';

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

    new OrderCreatedListener(natsWrapper.client).listen();
    new OrderCancelledListener(natsWrapper.client).listen();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000!');
  });
};

start();
