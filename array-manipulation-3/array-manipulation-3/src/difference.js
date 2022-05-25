/* exported difference */
function difference(first, second) {
  const firstArr= first.filter(values => !second.includes(values));
  const secondArr = second.filter(values => !first.includes(values));

  const joinedArr = firstArr.concat(secondArr);

  return joinedArr;

}
