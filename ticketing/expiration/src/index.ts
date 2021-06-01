import { natsWrapper } from '../src/nats-wrapper';
import { OrderCreatedListener } from '../src/events/listeners/order-created-listener';

const start = async () => {
  //check env variables defined
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
    await natsWrapper.connect(
      process.env.NATS_CLUSTER,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    );

    new OrderCreatedListener(natsWrapper.client).listen();

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
};

start();
