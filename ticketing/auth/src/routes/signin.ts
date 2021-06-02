import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '@eaticket-test/common';
import { BadRequestError } from '@eaticket-test/common';
import { PasswordHasher } from '@eaticket-test/common';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { requestValidator } from '@eaticket-test/common';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('password must be between 4 and 20 chars'),
  ],
  requestValidator,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log('hello 9!');

    const match = await User.findOne({ email });

    //Throw error if email does not exist
    if (!match) {
      throw new BadRequestError('invalid credentials!');
    }

    //Throw error if password does not match
    const passwordMatch = await PasswordHasher.compare(
      match.password,
      password
    );
    console.log(`Requested pass: ${password}. Passowrd match ${passwordMatch}`);

    if (!passwordMatch) {
      throw new BadRequestError('Incorrect Password!');
    }

    const user = User.build({ email, password });

    //
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.SIGNING_KEY!
    );

    req.session = { jwt: userJwt };

    res.status(200).send(user);
  }
);

export { router as signinRouter };
