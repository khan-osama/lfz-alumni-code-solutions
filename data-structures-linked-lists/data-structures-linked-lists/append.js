/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let current = list
  let newTail = new LinkedList(value)
  while (current.next) {
    current = current.next
  }
  current.next = newTail
  return list
}
