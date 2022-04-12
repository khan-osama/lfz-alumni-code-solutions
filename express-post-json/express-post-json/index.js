const express = require('express');
const app = express();
const parse = express.json();

app.use(parse);

let nextId = 1;

let grades = {};

app.get('/api/grades', (req, res) => {
  let gradesArr = [];
  for (let property in grades) {
    gradesArr.push(grades[property]);
  }
  res.json(gradesArr);
})

app.post('/api/grades', (req, res) => {
  req.body['id'] = nextId;
  grades[nextId] = req.body;
  res.status(201).json(grades[nextId]);
  nextId++;
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})
