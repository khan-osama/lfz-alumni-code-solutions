const path = require('path');
const express = require('express');
const app = express();
const myDir = path.join(__dirname, 'public');
const staticDir = express.static(myDir);

app.use(staticDir);

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
