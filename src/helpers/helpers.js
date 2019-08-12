function queueArray(queue) {
    let currentNode = queue.first;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }


  module.exports = {queueArray}