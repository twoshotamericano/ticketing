import { Listener, OrderCancelledEvent, Subjects } from '@eaticket-test/common';
import { queueGroupName } from './queue-group-name';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../models/ticket';
import { TicketUpdatedPublisher } from '../../events/publishers/ticket-updated-publisher';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;

  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEvent['data'], msg: Message) {
    //Find the ticket if it exists
    const ticket = await Ticket.findById(data.ticket.id);

    if (!ticket) {
      throw Error('ticket not found!');
    }
    //Update the ticket and saved
    ticket!.set('orderId', undefined);

    await ticket.save();

    //Emit ticket updated event
    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
      version: ticket.version,
      orderId: ticket.orderId,
    });

    msg.ack();
  }
}
