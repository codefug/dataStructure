import { Heap } from "../Heap/binaryHeap.js";

class PriorityQueue extends Heap {
  #upheap(index) {
    if (index > 0) {
      // 경우의 수가 (n-1)/2 이거나 (n-2)/2이기 때문에
      // 내림으로 처리한다.
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index].priority > this.arr[parentIndex].priority) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;
        this.#upheap(parentIndex);
      }
    }
  }
  priorityInsert(Node) {
    let index = this.arr.length;
    this.arr[index] = Node;
    this.#upheap(index);
    return this.arr;
  }
  #downheap(index) {
    if (index < this.arr.length) {
      const [childrenIndex1, childrenIndex2] = [index * 2 + 1, index * 2 + 2];
      const biggerIndex =
        (this.arr[childrenIndex1]?.priority||0) < (this.arr[childrenIndex2]?.priority||0)
          ? childrenIndex2
          : childrenIndex1;
      if (this.arr[biggerIndex].priority > this.arr[index].priority) {
        let temp = this.arr[biggerIndex];
        this.arr[biggerIndex] = this.arr[index];
        this.arr[index] = temp;
        this.#downheap(biggerIndex);
      }
    }
  }
  priorityRemove() {
    // 루트만 삭제
    const result = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.splice(this.arr.length - 1, 1);
    this.#downheap(0);
    return result;
  }
}

class Node {
  constructor(priority, name) {
    this.priority = priority;
    this.name = name;
  }
}
const pq = new PriorityQueue();
pq.priorityInsert(new Node(3, "one"));
pq.priorityInsert(new Node(7, "two"));
pq.priorityInsert(new Node(2, "three"));
pq.priorityInsert(new Node(8, "four"));
pq.priorityInsert(new Node(5, "five"));
pq.priorityInsert(new Node(6, "six"));
pq.priorityInsert(new Node(9, "king"));
console.log(pq.priorityRemove());
pq;