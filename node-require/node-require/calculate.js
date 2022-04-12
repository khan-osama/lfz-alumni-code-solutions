const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

// console.log(process.argv);
const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  console.log('result:', add.add(firstNum, secondNum));
}

if (process.argv[3] === 'minus') {
  console.log('result:', subtract.subtract(firstNum, secondNum));
}

if (process.argv[3] === 'times') {
  console.log('result:', multiply.multiply(firstNum, secondNum));
}

if (process.argv[3] === 'over') {
  console.log('result:', divide.divide(firstNum, secondNum));
}
