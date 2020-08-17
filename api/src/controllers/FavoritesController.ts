import db from '../database/connection';
import { Request, Response } from 'express';

interface MyRequest extends Request {
  id?: number;
}

export default class FavoritesController {
  async store(req: MyRequest, res: Response) {
    const { class_id } = req.body;
    const user_id = req.id;

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

  async index(req: MyRequest, res: Response) {
    const user_id = req.id;

    const fav = await db('favorites')
      .where('user_id', user_id)
      .join('classes', 'favorites.class_id', 'classes.id')
      .join('class_schedule', 'classes.owner_id', 'class_schedule.owner_id')
      .select(['favorites.id', 'classes.*', 'class_schedule.*']);
    return res.json(fav);
  }

  async delete(req: MyRequest, res: Response) {
    const { class_id } = req.params;
    const user_id = req.id;

    const trx = await db.transaction();

    try {
      await trx('favorites')
        .where('user_id', user_id)
        .where('class_id', class_id)
        .del();

      await trx.commit();

      return res.send();
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while deleting favorite' });
    }
  }
}
