// 이진 탐색 트리

// 모든 노드에서 작은 값은 왼쪽 자식, 큰 값은 오른 쪽 자식에 들어있는 트리
// 조회, 삭제, 삽입 모두 O(logn) (Balanced Tree의 경우)

// root부터 시작하는 나뭇가지가 펼쳐져 있는 데이터 구조
// 흔하게 쓰이는데 예를 들면 html 자체, 폴더의 구조 등이 트리의 구조를 갖고 있다.
// binary tree라는 구조가 있는데 가지가 최대 2개인 트리를 Ninary tree라고 한다.

//  기본 트리 코드
export class BinarySearchTree {
  root = null;
  length = 0;
  // 재귀를 위한 private method
  // length 리턴하게
  #insert(node, value) {
    // 중복되면 그냥 length를 리턴
    if (node.value === value){
      return this.length;
    }
    // 왼쪽 트리에 넣는 경우
    if (node.value > value) {
      // 왼쪽 트리가 비어있지 않다면 재귀
      if (node.left !== null) {
        return this.#insert(node.left, value);
      } else {
        // 왼쪽 트리가 비어있다면 length를 더하고 리턴 length
        node.left = new Node(value);
        return ++this.length;
      }
      // 오른쪽 트리에 넣는 경우
    } else {
      // 오른쪽 트리가 비어있지 않다면 재귀
      if (node.right !== null) {
        return this.#insert(node.right, value);
      } else {
        // 오른쪽 트리가 비어있다면 length를 더하고 리턴 length
        node.right = new Node(value);
        return ++this.length;
      }
    }
  }
  insert(value) {
    if (!this.root) {
      return (this.root = new Node(value));
    }
    return this.#insert(this.root, value);
  }
  // search는 insert와 비슷하지만 length 처리와
  // 발견했을때 작동 방식이 다르다.
  #search(node, value) {
    if (value === node.value) {
      return node;
    } else if (value > node.value) {
      if (node.right) {
        return this.#search(node.right, value);
      } else {
        return null;
      }
    } else {
      if (node.left) {
        return this.#search(node.left, value);
      } else {
        return null;
      }
    }
  }
  search(value) {
    if (!this.root) {
      return null;
    }
    return this.#search(this.root, value);
  }
  #remove(node, value) {
    // 4가지 경우의 수
    // 1. Leaf인 경우 => leaf 삭제
    // 2. 오른쪽 child만 있는 경우 => 오른쪽 child를 부모와 바꾸기
    // 3. 왼쪽 child만 있는 경우 => 왼쪽 child를 부모와 바꾸기
    // 4. 양쪽 다 있는 경우 => 왼쪽 서브트리에서 가장 큰 애랑 바꾸고 삭제
    // > 얘도 결국에는 1번으로 이동되서 처리되는 형식이다.
    // 1, 2, 3 모두 리턴 시에 length처리를 해주면 된다.
    if (!node) {
      return null;
    }
    if (node.value === value) {
      if (!node.left && !node.right) {
        this.length--;
        return null; // 둘다 없는 경우
      } else if (!node.left) {
        this.length--;
        return node.right; // 오른쪽 서브트리만 존재하는 경우
      } else if (!node.right) {
        this.length--;
        return node.left; // 왼쪽 서브트리만 존재하는 경우
      } else {
        let exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }
        node.value = exchange.value;
        node.left = this.#remove(node.left, exchange.value);
        return node;
      }
    } else {
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.#remove(node.right, value);
        return node;
      }
    }
  }
  remove(value) {
    // node는 root의 값이 바뀔 때만 null이 아니게 된다.
    this.root = this.#remove(this.root, value);
    return this.length;
  }
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}