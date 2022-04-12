const fs = require('fs');

let data = process.argv[2];

fs.writeFile('note.txt', data, 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})
