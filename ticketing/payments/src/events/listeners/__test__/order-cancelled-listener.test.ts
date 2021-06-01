import { OrderCancelledEvent, OrderStatus } from '@eaticket-test/common';
import mongoose from 'mongoose';
import { isJSDocEnumTag } from 'typescript';
import { Order } from '../../../models/orders';
import { OrderCancelledListener } from '../order-cancelled-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Message } from 'node-nats-streaming';

const setup = async () => {
  const orderId = mongoose.Types.ObjectId().toHexString();
  const data: OrderCancelledEvent['data'] = {
    id: orderId,
    status: OrderStatus.Cancelled,
    version: 1,
    ticket: {
      id: mongoose.Types.ObjectId().toHexString(),
    },
  };

  const order = Order.build({
    id: orderId,
    version: 0,
    userId: 'asdas',
    price: 20,
    status: OrderStatus.Created,
  });

  await order.save();

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  const listener = new OrderCancelledListener(natsWrapper.client);

  return { data, msg, order, listener };
};

it('acknowledges the message when received!', async () => {
  const { data, msg, order, listener } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

it('the status is updated to cancelled', async () => {
  const { data, msg, order, listener } = await setup();

  await listener.onMessage(data, msg);

  const orderUpdated = await Order.findById(data.id);

  expect(orderUpdated!.status).toEqual(OrderStatus.Cancelled);
});
