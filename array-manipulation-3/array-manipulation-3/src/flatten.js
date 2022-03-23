/* exported flatten */
function flatten(array) {
  var flatArr = [];
  return flatArr.concat(...array); //concat combines each array while the spread operator iterates over each item of the array
}
