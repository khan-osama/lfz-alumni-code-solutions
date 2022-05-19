/* exported includes */

function includes(list, value) {
  let current = list
  let isIncluded = false
  while (current.next) {
    if (current.data === value) {
      isIncluded = true
    }
    current = current.next
  }
  if (current.data === value) {
    isIncluded = true
  }
  return isIncluded
}
