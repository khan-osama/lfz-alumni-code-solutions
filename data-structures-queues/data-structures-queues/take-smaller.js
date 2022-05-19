/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  const firstVal = queue.dequeue()
  const secondVal = queue.dequeue()
  if (secondVal === undefined) {
    return firstVal
  }
  if (firstVal < secondVal) {
    queue.enqueue(secondVal)
    return firstVal
  } else {
    queue.enqueue(firstVal)
    return secondVal
  }
}
