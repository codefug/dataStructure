// FIFO (First In First Out)
// 줄 서기
// .push(), .shift()

// class Queue {
//   arr = [];

//   enqueue(value) {
//     return this.arr.push(value);
//   }

//   dequeue() {
//     return this.arr.shift();
//   }

//   peek() {
//     return this.arr.at(0); //최신 문법에서 마지막 인덱스 찍는 법
//   }

//   get length() { // get을 이용하여 해당하는 값만 노출되도록 한다. shift같은 배열 메소드 봉인
//     return this.arr.length;
//   }
// }

// class Node {
//   next = null;
//   constructor(value) {
//     this.value = value;
//   }
// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.dequeue();
// console.log(queue.peek());
// queue.length;

class Queue {
  front = null;

  enqueue(value) {
    if (this.front===null){
      this.front = new Node(value);
    }
    else{
      let current = this.front;
      while (current.next !==null){
        current=current.next;
      }
      current.next = new Node(value);
    }
  }

  dequeue() {
    if (this.front === null){
      return null;
    }
    let result = this.front.value;
    this.front = this.front.next;
    return result
  }

  peek(){
    if (this.front === null){
      return null;
    }
    return this.front.value;
  }
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(3);
queue.dequeue();
queue.peek();