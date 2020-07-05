import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('hiscores', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('score').notNullable();
    table.dateTime('date').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('hiscores');
}

