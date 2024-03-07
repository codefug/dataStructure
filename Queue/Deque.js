import { Node } from "./Queue.js";

class Deque {
  front = null;
  back = null;
  length = 0;
  // shift() 앞에서 빼기
  shift() {
    const result = this.front;
    this.length--;
    if (this.length === 0) {
      this.back = null;
      this.front = null;
    }
    return result;
  }
  // unshift(Node) 앞에서 Node 더하기
  unshift(Node) {
    this.length++;
    if (this.front === null) {
      this.front = Node;
      this.back = Node;
    } else {
      Node.next = this.front;
      this.front = Node;
    }
  }

  // push(Node) 뒤에서 Node 더하기
  push(Node) {
    if (this.back === null) {
      this.front = Node;
      this.back = Node;
    } else {
      this.back.next = Node;
      this.back = Node;
    }
  }

  // pop() 뒤에서 빼기
  pop() {
    this.length--;
    if (this.length === 0) {
      this.front = null;
      this.back = null;
    }
    let Node = this.front;
    while (Node.next !== this.back) {
      Node = Node.next;
    }
  }
}

const dq = new Deque();
dq.enqueue(new Node(2));
dq.push(new Node(4));
dq.pop();
dq.dequeue();
