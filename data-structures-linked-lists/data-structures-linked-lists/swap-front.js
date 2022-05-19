/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list
  }

  const secondNode = list.next.data
  const headNode = new LinkedList(list.data)
  const listNext = list.next.next
  headNode.next = list.next.next
  list.data = secondNode
  list.next = headNode
  return list
}
