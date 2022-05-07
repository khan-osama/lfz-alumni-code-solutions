/* exported getLength */

function getLength(list) {
  let nodeLength = 0;
  let listNode = list
  while (listNode !== null) {
    listNode = listNode.next
    nodeLength++
  }
  return nodeLength
}
