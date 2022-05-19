/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return
  }
  let frontVal = queue.dequeue()
  queue.enqueue(frontVal)
}
