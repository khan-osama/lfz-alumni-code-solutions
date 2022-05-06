/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined
  }
  const topVal = stack.pop()
  const secondVal = stack.peek()
  stack.push(topVal)

  return secondVal
}
