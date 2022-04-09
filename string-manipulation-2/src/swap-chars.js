/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let stringArr = [];
  let temp = null;
  for (let i = 0; i < string.length; i ++) {
    stringArr.push(string[i]);
  }
  temp = stringArr[secondIndex];
  stringArr[secondIndex] = stringArr[firstIndex];
  stringArr[firstIndex] = temp;

  return stringArr.join('');
}
