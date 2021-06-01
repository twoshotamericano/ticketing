import mongoose from 'mongoose';

import { app } from './app';
import { natsWrapper } from '../src/nats-wrapper';
import { OrderCancelledListener } from './events/listeners/order-cancelled-listener';
import { OrderCreatedListener } from './events/listeners/order-created-listener';

const start = async () => {
  //check env variables defined

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

  if (!process.env.STRIPE_SECRET_KEY) {
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

    new OrderCreatedListener(natsWrapper.client).listen();
    new OrderCancelledListener(natsWrapper.client).listen();

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
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000!');
  });
};

start();
