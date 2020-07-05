import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/highscores', async (request, response) => {
  const search = request.query.search;

  const scores = await knex('hiscores').select('*');

  const filteredScores = search ? scores.filter(user => user.name.includes(String(search))) : scores;

  response.json(filteredScores);
});

// routes.post('/highscores', (request, response) => {
//   const data = request.body;

//   const score = {
//     id: 5,
//     name: data.name,
//     score: data.score,
//   };

//   return response.json(score);
// });

export default routes;