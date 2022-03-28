/* exported take */
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
