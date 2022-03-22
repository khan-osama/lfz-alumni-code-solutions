/* exported pick */
function pick(source, keys) {
  var pickKeys = {};
  for (let property in source) {
    if (keys.includes(property) && source[property] !== undefined) {
      pickKeys[property] = source[property];
    }
  }
  return pickKeys;
}
