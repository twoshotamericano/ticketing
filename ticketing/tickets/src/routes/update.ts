import express, { NextFunction, Request, response, Response } from 'express';
import {
  authHandler,
  authRequired,
  userTokenHandler,
  requestValidator,
  NotFoundError,
  AuthenticationRequiredError,
  BadRequestError,
} from '@eaticket-test/common';
import { body, validationResult } from 'express-validator';
import { Ticket } from '../models/ticket';
import { natsWrapper } from '../nats-wrapper';
import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher';

const router = express.Router();

router.put(
  '/api/tickets/:id',
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
  authHandler,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);
    const { title, price } = req.body;

    if (!ticket) {
      throw new NotFoundError();
    }

    if (ticket.userId !== req.currentUser!.id) {
      throw new BadRequestError('Not Authorised to update this!');
    }

    if (ticket.orderId) {
      throw new BadRequestError('Cannot edit a reserved ticket!');
    }

    ticket.set({ title: req.body.title, price: req.body.price });

    await ticket.save();

    await new TicketUpdatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
      version: ticket.version,
    });

    return res.status(200).send(ticket);
  }
);

export { router as UpdateTicketRouter };
