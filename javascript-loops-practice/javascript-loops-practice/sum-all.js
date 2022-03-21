/* exported sumAll */
function sumAll(numbers) {
  var sumTotal = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumTotal += numbers[i];
  }
  return sumTotal;
}
