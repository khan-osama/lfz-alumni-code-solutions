/* exported capitalizeWords */
function capitalizeWords(string) {
  string = string.toLowerCase();
  var stringArr = string.split(' ');
  var cappedSentenceArr = [];
  for (var i = 0; i < stringArr.length; i++) {
    var cappedWord = stringArr[i].charAt([0]).toUpperCase() + stringArr[i].slice(1);
    cappedSentenceArr.push(cappedWord);
  }
  return cappedSentenceArr.join(' ');
}
