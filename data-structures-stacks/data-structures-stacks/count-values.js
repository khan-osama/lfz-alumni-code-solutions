/* exported countValues */

function countValues(stack) {
  let numPops = 0;
  while (stack.peek() !== undefined) {
    stack.pop()
    numPops++
  }
  return numPops
}
