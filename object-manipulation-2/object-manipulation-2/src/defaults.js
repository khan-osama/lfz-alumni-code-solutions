/* exported defaults */
function defaults(target, source) {
  for (let property in source) {
    if (property in source === true && property in target === false) {
      target[property] = source[property];
    }
  }
  return target;
}
