// 힙
// 최대 힙 > 위가 최대
// 최소 힙 > 위에 최소
// BST와 다르게 힙은 여러가지 결과가 나올 수 있다.
// 삽입, 삭제 O(logn)
// 조회, 수정(heapify) O(n)
// 힙 정렬은 삭제하는 것 O(logn), heapify하는 것 O(n)해서
// nlogn이 된다. 공간 복잡도는 O(n) (배열이기 때문에)

export class Heap {
  arr = [];
  #upheap(index) {
    if (index > 0) {
      // 경우의 수가 (n-1)/2 이거나 (n-2)/2이기 때문에
      // 내림으로 처리한다.
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] < this.arr[parentIndex]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;
        this.#upheap(parentIndex);
      }
    }
  }
  insert(value) {
    let index = this.arr.length;
    this.arr[index] = value;
    this.#upheap(index);
    return this.arr;
  }
  #downheap(index) {
    if (index < this.arr.length) {
      const [childrenIndex1, childrenIndex2] = [index * 2 + 1, index * 2 + 2];
      const smallerIndex =
        this.arr[childrenIndex1] > this.arr[childrenIndex2]
          ? childrenIndex2
          : childrenIndex1;
      if (this.arr[smallerIndex] < this.arr[index]) {
        let temp = this.arr[smallerIndex];
        this.arr[smallerIndex] = this.arr[index];
        this.arr[index] = temp;
        this.#downheap(smallerIndex);
      }
    }
  }
  remove() {
    // 루트만 삭제
    const result = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.splice(this.arr.length - 1, 1);
    this.#downheap(0);
    return result;
  }
  search(value) {
    for (let index = 0; index < this.arr.length; index++) {
      if (this.arr[index] === value) {
        return index;
      }
    }
    return null;
  }
  sort() {
    // 힙 정렬
    const sortedArray = [];
    while (this.arr.length > 0) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  }
  update(value, newValue) {
    const index = this.search(value);
    if (index === null){
      return false;
    }
    this.arr.splice(index,1,newValue);
    for (let i=0;i<Math.floor((this.arr.length)/2-1);i++){
        this.#heapify(i);
    }
  }
  removeValue(value) {
    const index = this.search(value);
    if (index === null) {
      return false;
    }
    this.arr.splice(index, 1);
    this.#heapify();
  }
  #heapify(index) {
    const [childrenIndex1, childrenIndex2] = [index * 2 + 1, index * 2 + 2];
    const smallerIndex =
      (this.arr[childrenIndex1]||0) > (this.arr[childrenIndex2]||0)
        ? childrenIndex2
        : childrenIndex1;
    if (this.arr[smallerIndex] < this.arr[index]) {
      let temp = this.arr[smallerIndex];
      this.arr[smallerIndex] = this.arr[index];
      this.arr[index] = temp;
    }
  }
}

// const heap = new Heap();
// console.log(heap.insert(3));
// console.log(heap.insert(1));
// console.log(heap.insert(7));
// console.log(heap.insert(4));
// console.log(heap.insert(6));
// console.log(heap.insert(5));
// console.log(heap.insert(8));
// console.log("--------------------------");
// heap.remove();
// console.log("삭제 후 : "+heap.arr);
// console.log("3 인덱스 검색 : "+heap.search(3));
// heap.update(3, 9);
// console.log("3 > 9 수정 : "+heap.arr);
// console.log("힙 정렬 : " + heap.sort());
// console.log("--------------------------");