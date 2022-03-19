var num1 = 255;
var num2 = 45;
var num3 = 2;

var maximumValue = Math.max(num1, num2, num3);

console.log("Max value: ", maximumValue);

var heroes = ['Batman', 'The Flash', 'Sandman', 'Iron Man'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);

console.log("Random Index: ", randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random Hero: ', randomHero);

var library = [
  {
    title: 'Cat in the Hat',
    author: 'Dr. Seuss'
  },
  {
    title: '1984',
    author: 'Orsen Welles'
  },
  {
    title: 'Never Split the Difference',
    author: 'Chris Voss'
  }
]

var lastBook = library.pop();
console.log('Last book of library: ', lastBook);

var firstBook = library.shift();
console.log('First book of library: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
}

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library: ', library);

var fullName = 'Osama Khan';
var firstAndLastName = fullName.split(' ');
console.log('First and Last Name: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name: ', sayMyName);
