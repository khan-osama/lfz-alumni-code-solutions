/* exported firstChars */
function firstChars(length, string) {
  var firstString = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      firstString += string[i];
    }
  }
  return firstString;
}
