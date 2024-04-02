export const getParentIndex = index => {
  const parentIndex = Math.floor((index - 1) / 2);

  return parentIndex;
};

export const getLeftChildIndex = index => {
  const leftIndex = index * 2 + 1;

  return leftIndex;
};

export const getRightChildIndex = index => {
  const leftIndex = index * 2 + 2;

  return leftIndex;
};
