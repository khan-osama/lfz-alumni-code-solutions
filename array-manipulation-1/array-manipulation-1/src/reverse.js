/* exported reverse */
function reverse(array) {
  var revArray = [];
  for (var i = 0; i < array.length; i++) {
    revArray.push(array[array.length - i - 1]);
  }
  return revArray;
}
