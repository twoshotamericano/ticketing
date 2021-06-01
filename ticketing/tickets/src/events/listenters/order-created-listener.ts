import { Listener, NotFoundError } from '@eaticket-test/common';
import {
  OrderCreatedEvent,
  TicketUpdatedEvent,
  Subjects,
} from '@eaticket-test/common';
import { queueGroupName } from './queue-group-name';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../models/ticket';
import { TicketUpdatedPublisher } from '../publishers/ticket-updated-publisher';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    //retrieve the ticket
    const ticket = await Ticket.findById(data.ticket.id);
    //acknowledge the message
    if (!ticket) {
      throw new Error('no ticket in database!');
    }

    //Mark ticket as reserved
    ticket.set({ orderId: data.id });

    //Save the ticket

    await ticket.save();
    const eventData: TicketUpdatedEvent = {
      subject: Subjects.TicketUpdated,
      data: {
        id: ticket.id,
        title: ticket.title,
        price: ticket.price,
        userId: ticket.userId,
        version: ticket.version,
        orderId: ticket.orderId,
      },
    };
    await new TicketUpdatedPublisher(this.client).publish(eventData['data']);

    msg.ack();
  }
}
