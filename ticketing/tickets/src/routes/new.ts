import express, { NextFunction, Request, response, Response } from 'express';
import {
  authHandler,
  authRequired,
  userTokenHandler,
  requestValidator,
} from '@eaticket-test/common';
import { body, validationResult } from 'express-validator';
import { Ticket } from '../models/ticket';
import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
import { natsWrapper } from '../../src/nats-wrapper';

const router = express.Router();

router.post(
  '/api/tickets/create',
  authHandler,
  [
    body('title')
      .not()
      .isEmpty()
      .withMessage('title must have between 1 and 20 characters'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('price must be greater than 0'),
  ],
  requestValidator,

  async (req: Request, res: Response) => {
    const { title, price } = req.body;
    const ticket = Ticket.build({
      title,
      price,
      userId: req.currentUser!.id,
    });

    await ticket.save();

    await new TicketCreatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId.toString(),
      version: ticket.version,
    });

    return res.status(201).send(ticket);
  }
);

export { router as NewTicketRouter };
