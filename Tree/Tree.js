// root부터 시작하는 나뭇가지가 펼쳐져 있는 데이터 구조
// 흔하게 쓰이는데 예를 들면 html 자체, 폴더의 구조 등이 트리의 구조를 갖고 있다.
// binary tree라는 구조가 있는데 가지가 최대 2개인 트리를 Ninary tree라고 한다.

//  기본 트리 코드
class Tree{
  constructor(value){
    this.root = new Node(value);
  }
}

class Node{
  children = [];
  constructor(value) {
    this.value = value;
  }

  push(value){
    this.children.push(new Node(value));
  }
}