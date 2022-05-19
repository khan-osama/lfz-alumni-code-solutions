/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  let firstVal = queue.dequeue()
  if (queue.peek() === undefined) {
    return firstVal
  }

  let secondVal = queue.peek()
  while (firstVal > secondVal) {
    queue.enqueue(firstVal)
    firstVal = queue.dequeue()
    secondVal = queue.peek()
  }
  return firstVal
}
