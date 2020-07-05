import express from 'express';

const routes = express.Router();

const scores = [
  {id: 1, name: 'matheus', score: 20},
  {id: 2, name: 'nobre', score: 10},
  {id: 3, name: 'pinto', score: 12},
];

routes.get('/highscores', (request, response) => {
  const search = String(request.query.search);

  const filteredScores = search ? scores.filter(user => user.name.includes(search)) : scores;

  response.json(scores);
});

routes.post('/highscores', (request, response) => {
  const data = request.body;

  const score = {
    id: 5,
    name: data.name,
    score: data.score,
  };

  return response.json(score);
});

export default routes;