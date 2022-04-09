/* exported truncate */
function truncate(length, string) {
  var shorterStr = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      shorterStr += string[i];
    }
  }
  shorterStr += '...';
  return shorterStr;
}
