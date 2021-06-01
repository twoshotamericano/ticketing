import { Listener, Subjects, OrderCreatedEvent } from '@eaticket-test/common';
import { queueGroupName } from './queue-group-name';
import { Message } from 'node-nats-streaming';
import mongoose from 'mongoose';
import { Order } from '../../models/orders';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    //Build Model
    const order = Order.build({
      id: data.id,
      price: data.ticket.price,
      status: data.status,
      userId: data.userId,
      version: data.version,
    });

    //Save

    await order.save();

    //Acknowledge

    msg.ack();
  }
}
