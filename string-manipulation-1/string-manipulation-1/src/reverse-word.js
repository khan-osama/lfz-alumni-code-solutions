/* exported reverseWord */
function reverseWord(word) {
  var revWord = '';
  for (var i = 0; i < word.length; i++) {
    revWord += word[word.length - i - 1];
  }
  return revWord;
}
