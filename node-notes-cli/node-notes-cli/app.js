const fs = require('fs');
const data = require('./data.json');
const userInput = process.argv[2];

if (userInput === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
}

if (userInput === 'create') {
  const userNote = process.argv[3];
  data.notes[data.nextId] = userNote;
  data.nextId++;
  const newData  = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', newData, 'utf8', (err) => {
    if (err) throw err;
  })
}

if (userInput === 'delete') {
  const noteNum = process.argv[3];
  delete data.notes[noteNum];

  const newData  = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', newData, 'utf8', (err) => {
  if (err) throw err;
})
}

if (userInput === 'update') {
  const noteNum = process.argv[3];
  const userUpdatedNote = process.argv[4];

  data.notes[noteNum] = userUpdatedNote;

  const newData  = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData, 'utf8', (err) => {
    if (err) throw err;
  })
}
