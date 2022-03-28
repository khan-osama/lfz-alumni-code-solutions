/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString = firstString.split(' ').join('');
  secondString = secondString.split(' ').join('');

  var isAnag = true;
  for (var i = 0; i < firstString.length; i++) {
    if (!(firstString.length === secondString.length && firstString.includes(secondString[i]))) {
      isAnag = false;
    }
  }
  return isAnag;
}
