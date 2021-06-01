import { OrderCreatedListener } from '../order-created-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Ticket } from '../../../models/ticket';
import {
  OrderCreatedEvent,
  OrderStatus,
  Subjects,
} from '@eaticket-test/common';
import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';

const setup = async () => {
  //Create an instance of the listener
  const listener = new OrderCreatedListener(natsWrapper.client);

  //Create and save a ticket
  const ticket = Ticket.build({
    title: 'testing',
    price: 20,
    userId: 'abcd',
  });

  await ticket.save();

  const order: OrderCreatedEvent['data'] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Created,
    userId: 'abc',
    version: 0,
    expiresAt: Date.now().toString(),
    ticket: {
      id: ticket.id,
      price: ticket.price,
    },
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, order, msg };
};

it('updates the ticket with the userId', async () => {
  const { listener, order, msg } = await setup();

  //pass the event into the listener
  await listener.onMessage(order, msg);

  //expect a userName on the order
  const ticket = await Ticket.findById(order.ticket.id);

  expect(ticket!.orderId).toEqual(order.id);
});

it('acknowledges receipt of the message', async () => {
  const { listener, order, msg } = await setup();

  //pass the event into the listener
  await listener.onMessage(order, msg);

  //expect a userName on the order
  const ticket = await Ticket.findById(order.ticket.id);

  expect(msg.ack).toHaveBeenCalled();
});

it('emits a ticket updated event', async () => {
  const { listener, order, msg } = await setup();

  //pass the event into the listener
  await listener.onMessage(order, msg);

  //expect a userName on the order
  const ticket = await Ticket.findById(order.ticket.id);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
