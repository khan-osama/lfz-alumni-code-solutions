/* exported countdown */
function countdown(number) {
  var array = [];
  while (number > -1) {
    array.push(number);
    number--;
  }
  return array;
}
