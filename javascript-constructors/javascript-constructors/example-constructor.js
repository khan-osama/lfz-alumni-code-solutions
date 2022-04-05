function ExampleConstructor() {

}

console.log('prototype property of ExampleConstructor: ', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor: ', typeof(ExampleConstructor.prototype));

var aFunction = new ExampleConstructor();
console.log('aFunction: ', aFunction);
