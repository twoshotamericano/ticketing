import {
  authHandler,
  requestValidator,
  NotFoundError,
  BadRequestError,
} from '@eaticket-test/common';
import express, { NextFunction, Request, response, Response } from 'express';
import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import { Ticket } from '../../models/ticket';
import { Order } from '../../models/orders';
import { OrderStatus } from '@eaticket-test/common';
import { OrderCreatedPublisher } from '../events/publishers/order-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();
const EXPIRATION_WINDOW_SECONDS = 1 * 60;

router.post(
  '/api/orders/create',
  [
    body('ticketId')
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage('You must provide a ticketID for the order'),
  ],
  requestValidator,
  authHandler,
  async (req: Request, res: Response) => {
    const { ticketId } = req.body;
    console.log(`ticket id is ${ticketId}`);
    //Find the ticket the user is trying to order in the db
    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      throw new NotFoundError();
    }

    //Make sure the ticket is not already reserved
    const isReserved = await ticket.isReserved();

    if (isReserved) {
      throw new BadRequestError('Ticket already reserved!');
    }

    //Calculate and expiration date for the order
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);

    //Build the order and save it to the database
    const order = Order.build({
      userId: req.currentUser!.id,
      status: OrderStatus.Created,
      expiresAt: expiration,
      ticket,
    });

    await order.save();

    //Publish an order and say that order was created
    new OrderCreatedPublisher(natsWrapper.client).publish({
      id: order.id,
      status: OrderStatus.Created,
      userId: order.userId,
      expiresAt: order.expiresAt.toISOString(),
      version: order.version,
      ticket: {
        id: order.ticket.id,
        price: order.ticket.price,
      },
    });

    return res.status(201).send(order);
  }
);

export { router as NewOrderRoute };
