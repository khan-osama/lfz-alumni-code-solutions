/* exported includes */
function includes(array, value) {
  var valueExists = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueExists = true;
    }
  }
  return valueExists;
}
