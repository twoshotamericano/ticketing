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

it('route exists for getting /api/orders !', async () => {
  const response = await request(app)
    .get('/api/orders/')
    .set('Cookie', await global.signup())
    .send()
    .expect(200);
});

it('returns all orders for a single user!', async () => {
  const ticket1 = await buildTicket();

  const user = await global.signup();

  const response = await request(app)
    .post('/api/orders/create')
    .set('Cookie', user)
    .send({ ticketId: ticket1.id })
    .expect(201);

  const orderResponse = await request(app)
    .get('/api/orders')
    .set('Cookie', user)
    .expect(200);

  expect(orderResponse.body.length).toEqual(1);
});

it('returns only orders for a particular user!', async () => {
  const ticket1 = await buildTicket();
  const ticket2 = await buildTicket();
  const ticket3 = await buildTicket();

  //users
  const user1 = await global.signup();
  const user2 = await global.signup();

  //orders
  const { body: orderOne } = await request(app)
    .post('/api/orders/create')
    .set('Cookie', user1)
    .send({ ticketId: ticket1.id })
    .expect(201);
  const { body: orderTwo } = await request(app)
    .post('/api/orders/create')
    .set('Cookie', user2)
    .send({ ticketId: ticket2.id })
    .expect(201);
  const { body: orderThree } = await request(app)
    .post('/api/orders/create')
    .set('Cookie', user2)
    .send({ ticketId: ticket3.id })
    .expect(201);

  const response = await request(app)
    .get('/api/orders/')
    .set('Cookie', user2)
    .send()
    .expect(200);

  expect(response.body.length).toEqual(2);
  expect(response.body[0].id).toEqual(orderTwo.id);
  expect(response.body[1].id).toEqual(orderThree.id);
  expect(response.body[0].ticket.id).toEqual(ticket2.id);
  expect(response.body[1].ticket.id).toEqual(ticket3.id);
});
