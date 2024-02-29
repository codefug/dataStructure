// LIFO (Last In First Out)
// 빨래 쌓아둔 구조
// 프로그래밍 중에서 무한 재귀 호출 했을 때 이제 Stack OverFlow 라고 함
// .push() .pop()

// class Stack {
//   arr = [];

//   push(value) {
//     return this.arr.push(value);
//   }

//   pop() {
//     return this.arr.pop();
//   }

//   top() {
//     return this.arr.at(-1); //최신 문법에서 마지막 인덱스 찍는 법
//   }

//   get length() { // get을 이용하여 해당하는 값만 노출되도록 한다. shift같은 배열 메소드 봉인
//     return this.arr.length;
//   }
// }

class Stack {
  toppest = null;

  push(value) {
    if (this.toppest === null) {
      this.toppest = new Node(value);
    } else {
      let current = new Node(value);
      current.next = this.toppest;
      this.toppest = current;
    }
  }

  pop() {
    let value = this.toppest;
    this.toppest = this.toppest?.next;
    return value?.value;
  }

  top() {
    return this.toppest?.value;
  }
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(4);
stack.pop();
stack.top();