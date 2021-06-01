import { Console } from 'console';
import nats, { Message, Stan } from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from '@eaticket-test/common';
import { TicketUpdatedListener } from '@eaticket-test/common';

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected to NATS!');

  new TicketCreatedListener(stan).listen();
  new TicketUpdatedListener(stan).listen();
});

stan.on('close', () => {
  console.log('NATS connection closed!');
  process.exit();
});

process.on('SIGINT', () => {
  stan.close();
});

process.on('SIGTERM', () => {
  stan.close();
});
