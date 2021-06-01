import { TicketCreatedListener } from '../ticket-created-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { TicketCreatedEvent } from '@eaticket-test/common';
import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../../../models/ticket';

const setup = async () => {
  //create an instance of listener

  const listener = new TicketCreatedListener(natsWrapper.client);

  //create a fake event

  const data: TicketCreatedEvent['data'] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'testing',
    price: 20,
    version: 0,
    userId: 'edward',
  };

  //create a fake message
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg };
};

it('creates and saves a ticket', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const ticket = await Ticket.findById(data.id);

  expect(ticket).toBeDefined();
  expect(ticket!.title).toEqual(data.title);
  expect(ticket!.price).toEqual(data.price);
});

it('acks the message', async () => {
  //call the onMessage function with the data object + message object

  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();

  //write assertions to make sure ticket created!
});
