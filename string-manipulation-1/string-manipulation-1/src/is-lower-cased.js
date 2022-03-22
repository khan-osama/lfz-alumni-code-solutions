/* exported isLowerCased */
function isLowerCased(word) {
  var allCaps = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] >= 'A' && word[i] <= 'Z') {
      allCaps = false;
    }
  }
  return allCaps;
}
