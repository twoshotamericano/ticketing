import request from 'supertest';
import { app } from '../../app';
import { Order, OrderStatus } from '../../../models/orders';
import { Ticket } from '../../../models/ticket';
import mongoose from 'mongoose';

const buildTicket = async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  return ticket;
};

it('fetcehs the order', async () => {
  //Create a ticket
  const ticket = await buildTicket();
  const userCookie = await global.signup();

  //Make an order for the ticket
  const { body: orderBody } = await request(app)
    .post('/api/orders/create')
    .set('Cookie', userCookie)
    .send({ ticketId: ticket.id })
    .expect(201);

  console.log(`Here is the orderBody id, ${orderBody.id}`);

  //<ake request to fetch the order
  const { body: showBody } = await request(app)
    .get(`/api/orders/${orderBody.id}`)
    .set('Cookie', userCookie)
    .send()
    .expect(200);

  expect(showBody.id).toEqual(orderBody.id);
});

it('does not fetch the order', async () => {
  //Create a ticket
  const ticket = await buildTicket();
  const user1 = await global.signup();
  const user2 = await global.signup();

  //Make an order for the ticket
  const { body: orderBody } = await request(app)
    .post('/api/orders/create')
    .set('Cookie', user1)
    .send({ ticketId: ticket.id })
    .expect(201);

  console.log(`Here is the orderBody id, ${orderBody.id}`);

  //<ake request to fetch the order
  const { body: showBody } = await request(app)
    .get(`/api/orders/${orderBody.id}`)
    .set('Cookie', user2)
    .send()
    .expect(401);
});
