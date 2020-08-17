import db from '../database/connection';
import { Request, Response } from 'express';

export default class FavoritesController {
  async store(req: Request, res: Response) {
    const { user_id, class_id } = req.body;

    const fav = await db('favorites')
      .where('user_id', user_id)
      .where('class_id', class_id);

    if (fav.length !== 0) {
      return res.status(400).json({ error: 'Is already favorited' });
    }

    await db('favorites').insert({
      user_id,
      class_id,
    });

    return res.send();
  }

  async index(req: Request, res: Response) {}

  async show(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}
