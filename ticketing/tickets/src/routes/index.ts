import express, { NextFunction, Request, response, Response } from 'express';
import {
  authHandler,
  authRequired,
  userTokenHandler,
  requestValidator,
} from '@eaticket-test/common';
import { body, validationResult } from 'express-validator';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets', async (req: Request, res: Response) => {
  const tickets = await Ticket.find({});

  res.send(tickets);
});

export { router as IndexTicketRouter };
