import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import mongoose from 'mongoose';

const createTicket = async () => {
  const title = 'sdfsddasd';
  const price = 20;

  return request(app)
    .post('/api/tickets/create')
    .set('Cookie', await global.signup())
    .send({ title, price })
    .expect(201);
};

it('it can fetch a list of tickets!', async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const ticketResponse = await request(app)
    .get(`/api/tickets`)
    .send()
    .expect(200);

  expect(ticketResponse.body.length).toEqual(3);
});
