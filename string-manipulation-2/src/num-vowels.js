/* exported numVowels */
function numVowels(string) {
  string = string.toLowerCase();
  var vowCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      vowCount++;
    }
  }
  return vowCount;
}
