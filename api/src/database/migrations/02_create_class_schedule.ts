import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', (table) => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.string('from').notNullable();
    table.integer('from_minutes').notNullable();
    table.string('to').notNullable();
    table.integer('to_minutes').notNullable();

    table
      .integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table
      .integer('owner_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}
