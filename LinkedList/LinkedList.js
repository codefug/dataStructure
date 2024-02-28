class LinkedList {
  length = 0;
  head = null;
  tail = null;

  //create
  add(value) {
    this.length++;
    if (this.head) {
      let node = new Node(value);
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    } else {
      let node = new Node(value);
      this.head = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.tail.next = this.head;
    }
    return this.length;
  }

  //private method
  #prevCurrent(index) {
    let count = 0;
    let prev;
    let current = this.head;
    if (index >= this.length || index <0) {
      return [undefined, null];
    }
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
      current.next.prev = prev;
      if (current.next === this.head) {
        this.tail = prev;
      }
      this.length--;
      return this.length;
    } else if (current !== null) {
      this.head = current.next;
      this.tail.next = this.head;
      this.head.prev = this.tail;
      this.length--;
      return this.length;
    }
  }

  getLength(){
    return this.length;
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
console.log(ll.getLength());
console.log(ll.add(1));
console.log(ll.add(2));
console.log(ll.add(3));
console.log(ll.search(2));
console.log(ll.remove(0));
console.log(ll.search(1));
console.log(ll.getLength());