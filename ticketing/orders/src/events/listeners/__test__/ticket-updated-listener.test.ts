import { TicketUpdatedListener } from '../ticket-updated-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Ticket } from '../../../../models/ticket';
import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import { TicketUpdatedEvent } from '@eaticket-test/common';

const setup = async () => {
  //Create a listener
  const listener = new TicketUpdatedListener(natsWrapper.client);
  //Create and save a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    id: new mongoose.Types.ObjectId().toHexString(),
  });
  await ticket.save();

  //Create a fake data object
  const data: TicketUpdatedEvent['data'] = {
    id: ticket.id,
    title: ticket.title,
    price: ticket.price,
    userId: 'edward',
    version: ticket.version + 1,
  };

  //Create a fake msg object
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  //return all the stuff
  return { listener, msg, data };
};

it('finds updates and saves a ticket', async () => {
  const { listener, msg, data } = await setup();

  await listener.onMessage(data, msg);

  const ticket = await Ticket.findById(data.id);

  expect(ticket!.price).toEqual(20);
  expect(ticket!.version).toEqual(data.version);
});

it('acks the message', async () => {
  const { listener, msg, data } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

it('ack is not called when events are out of order', async () => {
  const { listener, msg, data } = await setup();

  data.version += 1;

  try {
    await listener.onMessage(data, msg);
  } catch (error) {
    console.log('message not acknowledge');
  }
  expect(msg.ack).not.toHaveBeenCalled();
});
