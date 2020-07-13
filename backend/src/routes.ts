import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/highscores', async (request, response) => {
  const search = request.query.search;

  const scores = await knex('hiscores').select('*');

  const filteredScores = search ? scores.filter(user => user.name.includes(String(search))) : scores;

  response.json(filteredScores);
});

routes.post('/highscores', async (request, response) => {
  const score = request.body;
  
  const trx = await knex.transaction();

  const item = {
    ...score,
    date: new Date().toISOString().replace('Z','').replace('T', ' ').substr(0, 19),
  };
  
  const _id = await trx('hiscores').insert(item);

  await trx.commit();
  
  return response.json({ _id, ...item });
});

export default routes;