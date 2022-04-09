/* exported ransomCase */
function ransomCase(string) {
  string = string.toLowerCase();
  var ranString = '';
  for (var i = 0; i < string.length; i+= 2) {
    ranString += string[i] + string.charAt([i+1]).toUpperCase();
  }
  return ranString;
}
