/* exported capitalize */
function capitalize(word) {
  word = word.toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}
