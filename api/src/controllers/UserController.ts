import db from '../database/connection';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

export default class UserController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userExists = await db('users').where('email', email);

    if (userExists.length !== 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const password_hash = await bcrypt.hash(password, 8);

    const trx = await db.transaction();

    try {
      await trx('users').insert({
        name,
        email,
        password_hash,
      });

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while creating new user' });
    }
  }

  async update(req: Request, res: Response) {
    const { name, email, bio, whatsapp, avatar } = req.body;
    const { id } = req.params;

    const userExists = await db('users').where('id', id);

    if (userExists.length === 0) {
      return res.status(400).json({ error: "User doesn't exists" });
    }

    const trx = await db.transaction();

    try {
      await trx('users').where('id', id).update({
        name,
        email,
        bio,
        whatsapp,
        avatar,
      });

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while updating user' });
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const userExists = await db('users')
      .select('id', 'email', 'name', 'avatar', 'whatsapp', 'bio')
      .where('id', id);

    if (userExists.length === 0) {
      return res.status(400).json({ error: "User doesn't exists" });
    }

    return res.json(userExists);
  }
}
