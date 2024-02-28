class LinkedList {
  length = 0;
  head = null;
  //Create
  add(value) {
    this.length++;

    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }

    return this.length;
  }
  //Read
  search(index) {
    let count = 0;
    let current = this.head;
    while (count <index){
      current = current?.next;
      count++;
    }
    return current?.value;
  }
  //Delete
  remove(value) {

  }
}

class Node {
  next = null;
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
ll.search(1);
ll.remove(1);
