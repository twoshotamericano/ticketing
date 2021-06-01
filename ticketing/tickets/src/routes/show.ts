import express, { NextFunction, Request, response, Response } from 'express';
import {
  authHandler,
  authRequired,
  userTokenHandler,
  requestValidator,
  NotFoundError,
} from '@eaticket-test/common';
import { body, validationResult } from 'express-validator';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.status(200).send(ticket);
});

export { router as ShowTicketRouter };
