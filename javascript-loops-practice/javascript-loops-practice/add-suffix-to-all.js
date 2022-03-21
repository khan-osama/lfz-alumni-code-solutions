/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];
  var newWord = '';
  for (var i = 0; i < words.length; i++) {
    newWord = words[i] + suffix;
    suffixArray.push(newWord);
  }
  return suffixArray;
}
