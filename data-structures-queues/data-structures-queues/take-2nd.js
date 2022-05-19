/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined
  }
  let frontVal = queue.dequeue()
  let secondVal = queue.dequeue()
  if (secondVal === undefined) {
    return frontVal
  }
  queue.enqueue(frontVal)
  return secondVal
}
