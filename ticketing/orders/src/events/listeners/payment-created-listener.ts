import {
  Listener,
  PaymentCreatedEvent,
  Subjects,
  OrderStatus,
} from '@eaticket-test/common';
import { queueGroupName } from './queue-group-name';
import { Message } from 'node-nats-streaming';
import { Order } from '../../../models/orders';

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
    //retrieve order from database
    const order = await Order.findById(data.orderId);

    if (!order) {
      throw new Error('order not found');
    }

    //update status
    order.set({ status: OrderStatus.Complete });
    await order.save();

    msg.ack();
  }
}
