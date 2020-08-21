import { Request, Response } from 'express';

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface MyRequest extends Request {
  id?: number;
}

export default class ClassesController {
  async show(req: Request, res: Response) {
    const { class_id } = req.params;

    const schedules = await db('class_schedule').where(
      'class_id',
      '=',
      class_id
    );

    return res.json(schedules);
  }

  async index(req: Request, res: Response) {
    const filters = req.query;
    const { page = 1 } = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      const classes = await db('classes')
        .join('users', 'classes.owner_id', '=', 'users.id')
        .select(['classes.*', 'users.*'])
        .limit(10)
        .offset((Number(page) - 1) * 10);

      const newClasses = classes.map(async (classe) => {
        classe.schedule = await db('class_schedule').where(
          'class_id',
          classe.id
        );
        return classe;
      });

      const Teachers = await Promise.all(newClasses);

      return res.json({ Teachers, count: classes.length });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from_minutes` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to_minutes` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.owner_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])
      .limit(10)
      .offset((Number(page) - 1) * 10);

    const newClasses = classes.map(async (classe) => {
      classe.schedule = await db('class_schedule').where('class_id', classe.id);
      return classe;
    });

    const Teachers = await Promise.all(newClasses);

    return res.json({ Teachers, count: classes.length });
  }

  async update(req: MyRequest, res: Response) {
    const { subject, cost, schedule } = req.body;
    const id = req.id;

    const trx = await db.transaction();

    try {
      await trx('classes').where('owner_id', id).update({
        subject,
        cost,
      });

      const classes = await trx('classes').where('owner_id', id);

      if (schedule) {
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
          return {
            owner_id: id,
            class_id: classes[0].id,
            week_day: scheduleItem.week_day,
            from: scheduleItem.from,
            to: scheduleItem.to,
            from_minutes: convertHourToMinutes(scheduleItem.from),
            to_minutes: convertHourToMinutes(scheduleItem.to),
          };
        });

        await trx('class_schedule').where('class_id', classes[0].id).del();

        await trx('class_schedule').insert(classSchedule);
      }

      await trx.commit();

      return res.status(200).send();
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while updating class' });
    }
  }

  async store(req: MyRequest, res: Response) {
    const { whatsapp, bio, subject, cost, schedule } = req.body;
    const id = req.id;

    const trx = await db.transaction();

    try {
      await trx('users').where('id', id).update({
        whatsapp,
        bio,
      });

      await trx('classes').where('owner_id', id).del();
      await trx('class_schedule').where('owner_id', id).del();

      const insertedClassesIds = await trx('classes').insert({
        owner_id: id,
        subject,
        cost,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          owner_id: id,
          class_id,
          week_day: scheduleItem.week_day,
          from: scheduleItem.from,
          to: scheduleItem.to,
          from_minutes: convertHourToMinutes(scheduleItem.from),
          to_minutes: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx('class_schedule').insert(classSchedule);

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while creating new class' });
    }
  }
}
