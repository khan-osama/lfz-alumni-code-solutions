/* exported equal */
function equal(first, second) {
  var isEqual = true;
  for (var i = 0; i < first.length; i++) {
    if (!(first[i] === second[i]) || first.length !== second.length) {
      isEqual = false;
    }
  }
  return isEqual;
}
