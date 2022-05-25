/* exported intersection */
function intersection(first, second) {
  const newArr = first.filter(values => second.includes(values));

  return newArr;
}
