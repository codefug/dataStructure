import { BinarySearchTree } from "../Tree/BinarySearchTree.js";
import { Stack } from "../Stack/Stack.js";
import { Queue } from "../Queue/Queue.js";

/**
 * type으로 pre, in, post를 받아서 각각의 순회 경로를
 * 받는 함수
 * @param {string} type
 * @param {class} tree
 * @returns {string}
 */
function traversal(type, tree) {
  let result = "";
  if (tree === null){
    return "";
  }
  if (type === "pre") {
    result = dfs(tree);
  } else if (type === "in") {
    // left > value > right
    result += `${traversal("in", tree.left)}`;
    result += `${tree.value} `;
    result += `${traversal("in", tree.right)}`;
  } else if (type === "post") {
    // left > right > value
    result += `${traversal("post", tree.left)}`;
    result += `${traversal("post", tree.right)}`;
    result += `${tree.value} `;
  }
  return result;
}

function bfs(tree) {
  let result = "";
  const queue = new Queue();
  queue.enqueue(tree.root);
  while (queue.length > 0) {
    const node = queue.dequeue();
    result += `${node.value} `;
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  return result;
}

function dfs(tree) {
  let result = "";
  const stack = new Stack();
  stack.push(tree.root);
  while (stack.length > 0) {
    const node = stack.pop();
    result += `${node.value} `;
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);
console.log(bfs(bst));
console.log(dfs(bst));
console.log(traversal("pre", bst));
console.log(traversal("in", bst.root));
console.log(traversal("post", bst.root));