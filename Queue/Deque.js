import { Queue,Node } from "./Queue.js";

class Deque extends Queue{
  back=null;
  // shift, unshift, push, pop 형식으로 바꿔야 할듯(해라.)
  enqueue(Node){
    super.enqueue(Node);
    this.back=Node;
  }
  //  push가 앞에서 넣는것, pop이 뒤에서 빼는 거라고 하자.
  push(Node){
    back = Node
    this.length++;
  }
  pop(){
    this.length--;
  }
}

const dq = new Deque();
dq.enqueue(new Node(2));
dq.push(new Node(4));
dq.pop();
dq.dequeue();