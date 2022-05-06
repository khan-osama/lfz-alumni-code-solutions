/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const topVal = stack.pop()
    stack.push(value)
    stack.push(topVal)
  }
}
