import request from 'supertest';
import { app } from '../../app';
import { Order, OrderStatus } from '../../../models/orders';
import { Ticket } from '../../../models/ticket';

import mongoose from 'mongoose';
import { TicketUpdatedListener } from '@eaticket-test/common';
import { natsWrapper } from '../../nats-wrapper';

const buildTicket = async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  return ticket;
};

it('route exists for cancelling order /api/orders !', async () => {
  const response = await request(app)
    .delete('/api/orders')
    .set('Cookie', await global.signup())
    .send()
    .expect(400);
});

it('cancels an order /api/orders !', async () => {
  const ticket = await buildTicket();

  const user = await global.signup();

  const { body: order } = await request(app)
    .post(`/api/orders/create`)
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

  console.log(`The order id is ${order.id}`);

  const cancellationResponse = await request(app)
    .delete(`/api/orders`)
    .set('Cookie', user)
    .send({ orderId: order.id })
    .expect(204);

  const orderCancelled = await Order.findById(order.id);
  expect(orderCancelled!.status).toEqual(OrderStatus.Cancelled);
});

it('emits an order created event', async () => {
  const ticket = await buildTicket();

  const user = await global.signup();

  const { body: order } = await request(app)
    .post(`/api/orders/create`)
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

  console.log(`The order id is ${order.id}`);

  const cancellationResponse = await request(app)
    .delete(`/api/orders`)
    .set('Cookie', user)
    .send({ orderId: order.id })
    .expect(204);

  const orderCancelled = await Order.findById(order.id);
  expect(orderCancelled!.status).toEqual(OrderStatus.Cancelled);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
