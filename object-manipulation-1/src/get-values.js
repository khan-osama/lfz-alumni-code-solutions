/* exported getValues */
function getValues(object) {
  var valuesArray = [];
  for (let property in object) {
    valuesArray.push(object[property]);
  }
  return valuesArray;
}
