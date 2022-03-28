/* exported takeRight */
function takeRight(array, count) {
  var rightArray = [];
  var i = 0;
  if (array.length !== 0) {
    while (i < count) {
      rightArray.unshift(array[array.length - i - 1]);
      i++;
    }
  }
  return rightArray;
}
