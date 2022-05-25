/* exported zip */
function zip(first, second) {
  const newArr = first.map((value, index) => {
    return [value, second[index]]
  })
  const subArr = newArr[newArr.length - 1]
  if (!subArr[subArr.length - 1]) {
    newArr.pop()
  }
  return newArr
}
