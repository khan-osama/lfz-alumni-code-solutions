/* exported getTail */

function getTail(list) {
  let listNode = list
  while (listNode.next !== null) {
    listNode = listNode.next
  }
  return listNode.data
}
