/* exported union */
function union(first, second) {
  const unionArr = first.concat(second);
  const uniqueArr = [];

  for (let i = 0; i < unionArr.length; i++) {
    if (uniqueArr.indexOf(unionArr[i]) === -1 && unionArr[i] !== '') {
      uniqueArr.push(unionArr[i]);
    }
  }
  return uniqueArr;
}
