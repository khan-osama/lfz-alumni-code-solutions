/* exported reverseWords */
function reverseWords(string) {
  var stringArr = string.split(' ');
  var revArr = [];
  var newRevWord = '';
  for (var i = 0; i < stringArr.length; i++) {
    for (var j = 0; j < stringArr[i].length; j++) {
      newRevWord += (stringArr[i][stringArr[i].length - j - 1]);
    }
    revArr.push(newRevWord);
    newRevWord = '';
  }
  return revArr.join(' ');;
}
