import { Ticket } from '../../../models/ticket';
import { OrderCancelledEvent, OrderStatus } from '@eaticket-test/common';
import { natsWrapper } from '../../../nats-wrapper';
import { OrderCreatedListener } from '../order-created-listener';
import mongoose from 'mongoose';
import { OrderCancelledListener } from '../order-cancelled-listener';
import { Message } from 'node-nats-streaming';

const setup = async () => {
  //Create an instance of the listener
  const listener = new OrderCancelledListener(natsWrapper.client);

  //Create and save a ticket
  const ticket = Ticket.build({
    title: 'testing',
    price: 20,
    userId: 'abcd',
  });

  const orderId = new mongoose.Types.ObjectId().toHexString();
  ticket.set({ orderId });

  await ticket.save();

  const orderCancellation: OrderCancelledEvent['data'] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Cancelled,
    version: 0,
    ticket: {
      id: ticket.id,
    },
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, orderCancellation, msg };
};

it('updates the database when an ordered cancelled event rcd', async () => {
  const { listener, orderCancellation, msg } = await setup();

  //pass the event into the listener
  await listener.onMessage(orderCancellation, msg);

  //expect a userName on the order
  const ticket = await Ticket.findById(orderCancellation.ticket.id);

  expect(ticket!.orderId).toEqual(undefined);
});

it('acknowledges the order cancelled event', async () => {
  const { listener, orderCancellation, msg } = await setup();

  //pass the event into the listener
  await listener.onMessage(orderCancellation, msg);

  //expect a userName on the order
  const ticket = await Ticket.findById(orderCancellation.ticket.id);

  expect(msg.ack).toHaveBeenCalled();
});

it('emits an order updated event', async () => {
  const { listener, orderCancellation, msg } = await setup();

  //pass the event into the listener
  await listener.onMessage(orderCancellation, msg);

  //expect a userName on the order
  const ticket = await Ticket.findById(orderCancellation.ticket.id);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
