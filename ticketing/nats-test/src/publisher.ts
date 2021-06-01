import nats from 'node-nats-streaming';
import { TicketCreatedListener } from '@eaticket-test/common';

import { TicketCreatedPublisher } from '@eaticket-test/common';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', async () => {
  console.log('Publisher Connected to Nats');

  const data = JSON.stringify({
    id: '123',
    title: 'concert',
    price: 20,
  });

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: '123',
      title: '1212',
      price: 200,
    });
  } catch (err) {
    console.log(err);
  }
});
