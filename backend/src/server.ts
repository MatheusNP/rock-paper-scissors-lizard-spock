import express from 'express';

const app = express();

app.get('/highscores', (request, response) => {
  console.log('Highscores');

  response.json([
    {'id': 1, 'name': 'matheus', 'score': 20},
    {'id': 2, 'name': 'nobre', 'score': 10},
    {'id': 3, 'name': 'pinto', 'score': 12},
  ]);
});

app.listen(3333);