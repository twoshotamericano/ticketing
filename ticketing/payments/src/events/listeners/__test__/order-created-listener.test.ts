import { OrderCreatedEvent, OrderStatus } from '@eaticket-test/common';
import mongoose from 'mongoose';
import { natsWrapper } from '../../../nats-wrapper';
import { Message } from 'node-nats-streaming';
import { OrderCreatedListener } from '../order-created-listener';
import { Order } from '../../../models/orders';

const setup = async () => {
  //Create an OrderCreatedEvent
  const data: OrderCreatedEvent['data'] = {
    id: mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Created,
    userId: 'asdasd',
    expiresAt: 'asdaszd',
    version: 0,
    ticket: {
      id: mongoose.Types.ObjectId().toHexString(),
      price: 20,
    },
  };

  //Create a listener
  const listener = new OrderCreatedListener(natsWrapper.client);

  //Create a message
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { msg, data, listener };
};

it('acknowledges the message', async () => {
  const { msg, data, listener } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

it('saves an order to the database', async () => {
  const { msg, data, listener } = await setup();

  await listener.onMessage(data, msg);

  const order = await Order.findById(data.id);

  expect(order).not.toBeNull();
  expect(order!.id).toEqual(data.id);
});
