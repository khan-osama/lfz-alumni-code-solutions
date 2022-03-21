function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log("convertMinutesToSeconds: ", convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log("greet: ", greet('Osama'));

function getArea(width, height) {
  return width * height;
}

console.log("getArea: ", getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName: ', getFirstName({ firstName: 'Osama', lastName: 'Khan' }))

function getLastElement(array) {
  return array[array.length - 1];
}

console.log("getLastElement: ", getLastElement(['propane', 'and', 'propane', 'accessories']));
