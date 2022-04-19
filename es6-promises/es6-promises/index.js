const takeAChance = require('./take-a-chance');

const returnedProm = takeAChance('Osama');

returnedProm
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  })
