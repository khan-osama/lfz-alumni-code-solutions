/* exported maxValue */

function maxValue(stack) {
  let largestNum = stack.peek()
  if (stack.peek() === undefined) {
    return -Infinity
  }
  while (stack.peek() !== undefined) {
    const stackNum = stack.pop()
    if (largestNum < stackNum) {
      largestNum = stackNum
    }
  }
  return largestNum
}
