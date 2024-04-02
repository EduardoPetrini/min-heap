import { TheHeap } from './heap.js';

const start = () => {
  const myHeap = new TheHeap({ maxSize: 5 });

  for (let num of [10, 12, 5, 7, 14, 20, 32, 25, 13, 30, 15, 25, 22, 8, 2, 37, 1]) {
    myHeap.add(num);
    myHeap.print();
  }
};

start();
