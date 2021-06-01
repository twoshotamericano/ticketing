import { response } from 'express';
import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';

it('route exists for /api/tickets/create !', async () => {
  const response = await request(app).post('/api/tickets/create').send();

  expect(response).not.toEqual(404);
});

it('route is protected by auth!', async () => {
  const response = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', await global.signup())
    .send({});

  expect(response.status).not.toEqual(401);
});

it('invalud title is provided!', async () => {
  const response = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', await global.signup())
    .send({
      title: '',
      price: '20',
    })
    .expect(400);
});

it('invalud price is provided!', async () => {
  const response = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', await global.signup())
    .send({
      title: 'asasd',
      price: -20,
    })
    .expect(400);
});

it('creates a ticket with valid inputs', async () => {
  let tickets = await Ticket.find({});

  expect(tickets.length).toEqual(0);

  //add in a check that a new records has been saved to db
  const response = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', await global.signup())
    .send({
      title: 'asasd',
      price: 30,
    })
    .expect(201);

  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
  expect(tickets[0].price).toEqual(30);
});

it('publishes an event', async () => {
  const response = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', await global.signup())
    .send({
      title: 'asasd',
      price: 30,
    })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
