/* exported compact */
function compact(array) {
  var truthArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthArray.push(array[i]);
    }
  }
  return truthArray;
}
