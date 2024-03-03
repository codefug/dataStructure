// 이진 탐색 트리

// 어떤 노드를 기준으로 작은 값은 왼쪽 자식, 큰 값은 오른 쪽 자식으로 들어가는 트리
// 조회, 삭제, 삽입 모두 O(logn) (Balanced Tree의 경우)
// 이진트리의 종류

// Full
// 자식이 0 아니면 2

// Perfect
// leaf들이 모두 같은 level을 갖고 있다.
// 삼각형 모양일 수 밖에 없다.

// Complete
// 어떤 트리든 간에 왼쪽부터 채웠다면 Complete Tree라고 한다.

// Degenerate
// 자식의 개수가 하나인 Tree (왼쪽 자식이든 오른쪽 자식이든 같다.) (연결리스트)

// Balanced
// depth (왼쪽 height와 오른쪽 height의 차이)가 0이거나 1인 것

// root부터 시작하는 나뭇가지가 펼쳐져 있는 데이터 구조
// 흔하게 쓰이는데 예를 들면 html 자체, 폴더의 구조 등이 트리의 구조를 갖고 있다.
// binary tree라는 구조가 있는데 가지가 최대 2개인 트리를 Ninary tree라고 한다.

//  기본 트리 코드
class BinarySearchTree {
  root = null;
  lenght = 0;
  // 재귀를 위한 private method
  #insert(node, value) {
    if (node.value > value) {
      if (node.left !== null) {
        this.#insert(node.left, value);
      } else {
        node.left = new Node(value);
      }
    } else {
      if (node.left !== null) {
        this.#insert(node.right, value);
      } else {
        node.left = new Node(value);
      }
    }
  }
  insert(value) {
    if (!this.root) {
      return this.root = new Node(value);
    }
    return this.#insert(this.root, value);
  }
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
    if (this.root.value === value) {
      return this.root;
    }
    return this.#search(this.root, value);
  }
  #remove(node, value) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      if (!node.left & !node.right) {
        return null; // 둘다 없는 경우
      } else if (!node.left) {
        return node.right; // 오른쪽 서브트리만 존재하는 경우
      } else if (!node.right) {
        return node.left; // 왼쪽 서브트리만 존재하는 경우
      } else {
        const exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }
        const temp = node.value;
        node.value = exchange.value;
        exchange.value = temp;
        node.left = this.#remove(exchange.value);
        return node;
      }
    } else {
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
      } else {
        node.right = this.#remove(node.right, value);
      }
    }
  }
  remove(value) {
    // 4가지 경우의 수
    // 1. Leaf인 경우 => leaf 삭제
    // 2. 오른쪽 child만 있는 경우 => 오른쪽 child를 부모와 바꾸기
    // 3. 왼쪽 child만 있는 경우 => 왼쪽 child를 부모와 바꾸기
    // 4. 양쪽 다 있는 경우 => 왼쪽 서브트리에서 가장 큰 애랑 바꾸고 삭제
    const node = this.#remove(this.root, value);
    if (node) {
      this.root = node;
    }
  }
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }

  push(value) {
    this.children.push(new Node(value));
  }
}

const bst = new BinarySearchTree();
bst.insert(3);
bst.insert(4);
bst.insert(2);
bst.insert(10);
bst.insert(23);

// 전체와 부분이 똑같은 알고리즘을 적용할 수 있으면 재귀를 사용하는 것이 좋다.