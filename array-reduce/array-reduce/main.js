const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(sum);

const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);

console.log(product);

let initialValue = 0;

const balance = account.reduce(
  (previousValue, currentValue) => {
    if (currentValue.type === 'deposit') {
      previousValue = previousValue + currentValue.amount;
    } else {
      previousValue = previousValue - currentValue.amount;
    }
    return previousValue;
  }
  , initialValue);


console.log(balance);

const composite = traits.reduce(
  ((originalTrait, newTrait) => {
    originalTrait = Object.assign(originalTrait, newTrait);
    return originalTrait;
  })
, {});

console.log(composite);
