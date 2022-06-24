/* exported unique */
function unique(array) {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1 && array[i] !== '') {
      newArr.push(array[i])
    }
  }
  return newArr
}
