/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    let tempVal = queue.dequeue()
    queue.enqueue(tempVal)
  }
  let valueAtIndex = queue.dequeue()
  return valueAtIndex
}
