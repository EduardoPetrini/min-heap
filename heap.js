import { getLeftChildIndex, getParentIndex, getRightChildIndex } from './lib/helpers.js';

export class TheHeap {
  constructor({ maxSize = 100 } = {}) {
    this.heap = [];
    this.maxSize = maxSize;
  }

  swap(oldIndex, newIndex) {
    const temp = this.heap[oldIndex];
    this.heap[oldIndex] = this.heap[newIndex];
    this.heap[newIndex] = temp;
  }

  heapify(index) {
    if (!index) {
      return;
    }

    const parentIndex = getParentIndex(index);

    const [parent, child] = [this.get(parentIndex), this.get(index)];

    if (parent > child) {
      this.swap(parentIndex, index);
      this.heapify(parentIndex);
    }
  }

  get(index) {
    return this.heap[index];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  lastIndex() {
    return this.heap.length - 1;
  }

  add(number) {
    if (this.isEmpty()) {
      this.heap = [number];
      return;
    }
    this.heap.push(number);
    this.heapify(this.lastIndex());

    if (this.lastIndex() > this.maxSize) {
      this.remove();
    }
  }

  remove() {
    this.heap.pop();
  }

  print() {
    console.log(this.heap.map((num,index) => `[${index}]${num}`).toString());
  }

  printLn(index = 0) {
    if (index > this.lastIndex()) {
      return;
    }

    console.log(`[${index}]${this.get(index)}`);
    this.print(getLeftChildIndex(index));
    this.print(getRightChildIndex(index));
  }
}
