/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  let nextList = list.next
  let newValue = new LinkedList(value)
  newValue.next = nextList
  list.next = newValue
}
