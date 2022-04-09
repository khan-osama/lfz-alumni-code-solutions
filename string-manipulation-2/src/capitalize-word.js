/* exported capitalizeWord */
function capitalizeWord(word) {
  word = word.toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  if (word === 'Javascript') {
    word = 'JavaScript';
  }
  return word;
}
