/* exported isVowel */
function isVowel(char) {
  char = char.toLowerCase();
  var boolVowel = false;
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    boolVowel = true;
  }
  return boolVowel;
}
