var bookshelf = [
  {
    isbn: '9780393541212',
    title: 'The Wok: Recipes and Techniques',
    author: 'J. Kenji López-Alt'
  },
  {
    isbn: '9780593446065',
    title: 'Lucy by the Sea',
    author: 'Elizabeth Strout'
  },
  {
    isbn: '9780316495530',
    title: 'Waypoints',
    author: 'Sam Heughan'
  }
]

console.log('Bookshelf array: ', bookshelf);
console.log('Typeof bookshelf: ', typeof(bookshelf))

var jsonBooks = JSON.stringify(bookshelf);

console.log('JSON books: ', jsonBooks);
console.log('Typeof JSON books: ', typeof(jsonBooks))

var studentJSON = '[{"studentid":"5632234","studentname":"Osama Khan"}]';

console.log('student: ', studentJSON);
console.log('Typeof student: ', typeof(studentJSON));

var studentObj = JSON.parse(studentJSON);

console.log('Student object: ', studentObj);
console.log('Typeof Student object: ', typeof(studentObj));
