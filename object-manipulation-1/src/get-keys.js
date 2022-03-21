/* exported getKeys */
function getKeys(object) {
  var keysArray = [];
  for (let property in object) {
    keysArray.push(property);
  }
  return keysArray;
}
