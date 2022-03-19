var student = {
  firstName: 'Osama',
  lastName: 'Khan',
  age: '26'
}

var fullName = student.firstName + student.lastName;

console.log("Full name: ", fullName);

student.livesInIrvine = false;

student.previousOccupation = "Technical Business Analyst";

console.log("Lives in Irvine: ", student.livesInIrvine);
console.log("Previous occupation: ", student.previousOccupation);
console.log("Value of student: ", student);

var vehicle = {
  make: 'Porsche',
  model: '917k',
  year: '1970'
}

vehicle['color'] = 'gulf blue';
vehicle['isConvertible'] = false;

console.log('Color: ', vehicle['color']);
console.log('Is it convertible? ', vehicle['isConvertible']);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Raja',
  type: 'Cat'
}

delete pet.name;
delete pet.type;

console.log('Value of pet: ', pet);
