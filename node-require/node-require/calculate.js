const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

// console.log(process.argv);

if (process.argv[3] === 'plus') {
  console.log('result:', parseInt(process.argv[2]) + parseInt(process.argv[4]));
}

if (process.argv[3] === 'minus') {
  console.log('result:', parseInt(process.argv[2]) - parseInt(process.argv[4]));
}

if (process.argv[3] === 'times') {
  console.log('result:', parseInt(process.argv[2]) * parseInt(process.argv[4]));
}

if (process.argv[3] === 'over') {
  console.log('result:', parseInt(process.argv[2]) / parseInt(process.argv[4]));
}
