```
Linked List

배열 이라는 메모리관리가 필요없는 사기적인 것이 있기 때문에 신경쓰지 않지만
배열이 없다고 생각하고 생각해야 자료구조를 배울 수 있다.

컴퓨터에서 데이터를 저장할 때 메모리에 순차적으로 저장한다. 예를 들어

1,2,3,4,5,6,7을 저장하고 다른 걸 또 해서 a를 넣고 다시 돌아와서 8을 넣는다고 하면
메모리 상으로는 7 다음 값이 a이고 그 다음 값이 8 이 된다.

바로 옆만 탐색하면 되던게 바뀌게 되었다. 어떻게 해결해야 할까? > 다음 값을 함께 저장해줘서 다음 값을 주소값 삼아서 이동해서 찾으면 된다.

이러한 리스트를 연결 리스트 (Linked List)라고 한다.

[a1] [ 1,다음 b2] > [b2] [ 2, 다음 v2] > [v2] [ 3 다음 f1] > ...

이런 식으로 데이터를 한번에 저장하여 CRUD 할 수 있게 된다.

node를 이용해서 터미널에서 자바스크립트 언어를 이용하여 구현해보자.
```
class LinkedList {
  length = 0;
  head = null;
  //Create
  add(value){
    if (this.head){
      let current = this.head;
      while (current.next){
        current=current.next;
      }
      current.next = new Node(value);
    }else{
      this.head = new Node(value);
      this.length++;
      return length;
    }
  }
  //Read
  search(value){

  }
  //Delete
  remove(value){

  }
}

class Node{
  next = null;
  constructor(value){
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;
ll.add(1);
ll.search(4);
ll.search(1);
ll.remove(1)