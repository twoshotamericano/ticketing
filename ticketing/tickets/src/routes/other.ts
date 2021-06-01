import express, { Request, Response } from 'express';
import { userTokenHandler, authHandler } from '@eaticket-test/common';
import { AuthenticationRequiredError } from '@eaticket-test/common';

const router = express.Router();

router.post(
  '/api/tickets/other',
  authHandler,
  (req: Request, res: Response) => {
    console.log(req.currentUser);
    console.dir(authHandler);
    //throw new AuthenticationRequiredError();
    console.log('Error thrown');
    res.sendStatus(200);
  }
);

export { router as createTicketRouterTest };
