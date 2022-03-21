/* exported includesSeven */
function includesSeven(array) {
  var sevenBool = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenBool = true;
    }
  }
  return sevenBool;
}
