/* exported equal */
function equal(first, second) {
<<<<<<< HEAD
  if (first.length !== second.length) {
    return false
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false
    }
  }
  return true;
=======
  var isEqual = true;
  for (var i = 0; i < first.length; i++) {
    if (!(first[i] === second[i]) || first.length !== second.length) {
      isEqual = false;
    }
  }
  return isEqual;
>>>>>>> 502235d963fecda82f27ac84e30264ccbf710388
}
