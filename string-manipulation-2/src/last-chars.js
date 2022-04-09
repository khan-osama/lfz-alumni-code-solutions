/* exported lastChars */
function lastChars(length, string) {
  var lastString = [];
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      lastString.unshift(string[string.length - i - 1]);
    }
  }
  return lastString.join('');
}
