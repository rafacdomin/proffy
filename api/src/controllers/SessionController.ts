import db from '../database/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import authConfig from '../config/auth';

interface User {
  schedule?: Array<object>;
}

export default class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const userExists = await db('users')
      .where('email', '=', email)
      .select(['users.*']);

    if (userExists.length === 0) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    if (!(await bcrypt.compare(password, userExists[0].password_hash))) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const { id } = userExists[0];

    return res.json({
      user: userExists[0],
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}
