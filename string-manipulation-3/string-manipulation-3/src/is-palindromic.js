/* exported isPalindromic */
function isPalindromic(string) {
  string = string.split(' ').join('');
  var isPalin = true;
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      isPalin = false;
    }
  }
  return isPalin;
}
