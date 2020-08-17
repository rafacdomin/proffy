import db from '../database/connection';
import { Request, Response } from 'express';

export default class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    return res.json({ email, password });
  }
}
