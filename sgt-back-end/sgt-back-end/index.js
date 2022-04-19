const pg = require('pg');
const express = require('express');
const app = express();
const parse = express.json();

app.use(parse);


const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
})

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'Name, course and score are all required fields.'
    })
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'Score must be between 0 and 100.'
    })
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
    `;

    const params = [req.body.name, req.body.course, req.body.score];
    db.query(sql, params)
      .then(result => {
        res.status(201).json(result.rows);
      })
  }
})

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);

  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'Name, course and score are all required fields.'
    })
  } else if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({
      error: 'Score must be between 0 and 100.'
    })
  } else if (gradeId <= 0 || !Number.isInteger(gradeId) ) {
    res.status(400).json({
      error: 'gradeId must be a positive integer.'
    })
  } else {
    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *
    `;

    const params = [req.body.name, req.body.course, req.body.score, gradeId];
    db.query(sql, params)
      .then(result => {
        if (!result.rows[0]) {
          res.status(404).json({
            error: `Grade with gradeId ${gradeId} does not exist.`
          })
        } else {
          res.status(201).json(result.rows);
        }
      })
  }
})

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (gradeId <= 0 || !Number.parseInt(gradeId)) {
    res.status(400).json({
      error: 'gradeId must be a positive integer.'
    })
  } else {
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *
      `;

    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        if (!result.rows[0]) {
          res.status(404).json({
            error: `Grade with gradeId ${gradeId} does not exist.`
          })
        } else {
          res.status(204).json()
        }
      })
  }
})


app.listen(3000, () => {
  console.log('Listening on port 3000!');
})

app.use((req, res) => {
  res.status(500).json({
    error: 'An unexpected error happened!'
  })
})
