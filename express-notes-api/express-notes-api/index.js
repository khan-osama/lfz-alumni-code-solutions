const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();
const parse = express.json();

const intError = {
  error: 'id must be a positive integer.'
}

const bodyError = {
  error: 'content is a required field'
}

app.use(parse);

app.get('/api/notes', (req, res) => {

  let notesArr = [];
  for (let property in data.notes) {
    notesArr.push(data.notes[property]);
  }
  res.json(notesArr);
})

app.get('/api/notes/:id', (req, res) => {

  if (!(req.params.id > 0)) {
    res.status(400).json(intError);
  } else {
      if (!data.notes[req.params.id]) {
        const missingError = {
          error: `cannot find note with id ${req.params.id}`
        }
        res.status(404).json(missingError);
      } else {
        res.json(data.notes[req.params.id]);
      }
  }
})

app.post('/api/notes', (req, res) => {

  if (!req.body.content) {
    res.status(400).json(bodyError);
  } else {
      req.body.id = data.nextId;
      data.notes[data.nextId] = req.body;
      data.nextId++;

      const newData  = JSON.stringify(data, null, 2);

      fs.writeFile('data.json', newData, 'utf8', err => {
        if (err) {
          const unexpectedError = {
            error: 'an unexpected error occurred'
          }
          res.status(500).json(unexpectedError);
          console.error(err);
        } else {
          res.status(201).send(req.body)
        }
      })
  }
})

app.delete('/api/notes/:id', (req, res) => {

  if (!(req.params.id > 0)) {
    res.status(400).json(intError);
  } else {
      if (!data.notes[req.params.id]) {
        const missingError = {
          error: `cannot find note with id ${req.params.id}`
        }
        res.status(404).json(missingError);
      } else {
          delete data.notes[req.params.id];
          const newData  = JSON.stringify(data, null, 2);

          fs.writeFile('data.json', newData, 'utf8', err => {
            if (err) {
              const unexpectedError = {
                error: 'an unexpected error occurred'
              }
              res.status(500).json(unexpectedError);
              console.error(err);
            } else {
              res.status(204).json();
            }
          })
      }
  }
})

app.put('/api/notes/:id', (req, res) => {

  if (!(req.params.id > 0)) {
    res.status(400).json(intError);
  } else if (!req.body.content) {
    res.status(400).json(bodyError);
  } else {
      if (!data.notes[req.params.id]) {
        const missingError = {
          error: `cannot find note with id ${req.params.id}`
        }
        res.status(404).json(missingError);
      } else {
        data.notes[req.params.id].content = req.body.content;

        const newData  = JSON.stringify(data, null, 2);

        fs.writeFile('data.json', newData, 'utf8', err => {
          if (err) {
            const unexpectedError = {
              error: 'an unexpected error occurred'
            }
            res.status(500).json(unexpectedError);
            console.error(err);
          } else {
            res.json(data.notes[req.params.id]);
          }
        })
      }
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})
