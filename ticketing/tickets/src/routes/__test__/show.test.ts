import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import mongoose from 'mongoose';

it('it returns 404 if ticket not found!', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .get(`/api/tickets/${id}`)
    .send()
    .expect(404);
});

it('it returns ticket if ticket is found!', async () => {
  const title = 'sdfsddasd';
  const price = 20;
  console.log('fafsdf');

  const response = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', await global.signup())
    .send({ title, price })
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.price === price);
});
