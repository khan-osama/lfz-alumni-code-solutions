/* exported invert */
function invert(source) {
  var invertObj = {};
  for (let property in source) {
    invertObj[source[property]] = property;
  }
  return invertObj;
}
