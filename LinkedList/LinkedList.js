class LinkedList {
  length = 0;
  head = null;
  tail = null;
  add(value) {
    this.length++;
    if (this.head) {
      let node = new Node(value);
      node.prev = this.tail;
      node.next = this.head;
      this.tail.next = node;
      this.head.prev = node;
    } else {
      let node =new Node(value);
      this.head = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.head.next = this.tail;
      this.tail.prev=this.head;
      this.tail.next = this.head;
    }
    return this.length;
  }
  #prevCurrent(index) {
    // private method
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }
  //search
  search(index) {
    return this.#prevCurrent(index)[1]?.value;
  }
  //Delete
  remove(index) {
    const [prev, current] = this.#prevCurrent(index);
    if (prev !== undefined && current !== null) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current !== null) {
      this.head = current.next;
      this.length--;
      return this.length;
    }
  }
}

class Node {
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;
console.log(ll.add(1));
console.log(ll.add(2));
console.log(ll.add(3));
console.log(ll.search(2));
console.log(ll.remove(1));
console.log(ll.search(2));
