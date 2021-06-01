import { ExpirationCompleteListener } from '../expiration-complete-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Order, OrderStatus } from '../../../../models/orders';
import { Ticket } from '../../../../models/ticket';
import mongoose from 'mongoose';
import { ExpirationComplete } from '@eaticket-test/common';
import { Message } from 'node-nats-streaming';

const setup = async () => {
  const listener = new ExpirationCompleteListener(natsWrapper.client);

  const date = new Date();
  date.setSeconds(date.getSeconds() + 30);

  const ticket = Ticket.build({
    id: mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 20,
  });

  await ticket.save();

  const order = Order.build({
    userId: 'asdasd',
    status: OrderStatus.Created,
    expiresAt: date,
    ticket: ticket,
  });

  await order.save();

  const data: ExpirationComplete['data'] = {
    orderId: order.id,
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { ticket, order, msg, data, listener };
};

it('cancels an expired order', async () => {
  const { listener, order, ticket, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
});

it('emits an order cancelled event', async () => {
  const { listener, order, ticket, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  const eventData = JSON.parse(
    (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
  );

  expect(eventData.id).toEqual(order.id);
});

it('acks the message', async () => {
  const { listener, order, ticket, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
