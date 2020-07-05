import Knex from 'knex';

export async function seed( knex: Knex) {
  await knex('hiscores').insert([
    {name: 'MAD', score: 10, date: '2020-01-01 10:00:00'},
    {name: 'PAC', score: 8, date: '2020-01-01 10:00:00'},
    {name: 'MS.', score: 6, date: '2020-01-01 10:00:00'},
    {name: 'JR.', score: 4, date: '2020-01-01 10:00:00'},
    {name: 'BAB', score: 2, date: '2020-01-01 10:00:00'},
  ]);
}