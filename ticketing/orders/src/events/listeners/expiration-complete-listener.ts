import {
  Listener,
  ExpirationComplete,
  Subjects,
  OrderStatus,
} from '@eaticket-test/common';
import mongoose from 'mongoose';
import { natsWrapper } from '../../nats-wrapper';
import { queueGroupName } from './queue-group-name';
import { Message } from 'node-nats-streaming';
import { Order } from '../../../models/orders';
import { OrderCancelledPublisher } from '../publishers/order-cancelled-publisher';

export class ExpirationCompleteListener extends Listener<ExpirationComplete> {
  readonly subject = Subjects.ExpirationComplete;
  queueGroupName = queueGroupName;
  async onMessage(data: ExpirationComplete['data'], msg: Message) {
    //Retrieve the order the corresponding id
    const order = await Order.findById(data.orderId).populate('ticket');

    if (!order) {
      throw new Error('no order in database!');
    }

    if (order.status === OrderStatus.Complete) {
      return msg.ack();
    }

    order.set({ status: OrderStatus.Cancelled });
    //update the order status
    //save to database
    await order.save();
    //publish corresponding events
    await new OrderCancelledPublisher(natsWrapper.client).publish({
      id: order.id,
      status: OrderStatus.Cancelled,
      version: order.version,
      ticket: {
        id: order.ticket.id,
      },
    });

    msg.ack();
  }
}
