import {
  Listener,
  OrderCancelledEvent,
  Subjects,
  OrderStatus,
} from '@eaticket-test/common';
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';
import { Order } from '../../models/orders';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;
  async onMessage(data: OrderCancelledEvent['data'], msg: Message) {
    //retrieve the order
    const order = await Order.findOne({
      _id: data.id,
      version: data.version - 1,
    });

    if (!order) {
      throw new Error('order not found!');
    }
    //update the status
    order.set({ status: OrderStatus.Cancelled });
    await order.save();
    //acknowledge the message
    msg.ack();
  }
}
