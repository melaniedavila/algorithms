function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midIndex);
  const rightHalf = arr.slice(midIndex);
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftHalf, rightHalf) {
  let sorted = [];
  while (leftHalf.length > 0 && rightHalf.length > 0) {
    if (leftHalf[0] < rightHalf[0]) {
      sorted.push(leftHalf.shift());
    } else {
      sorted.push(rightHalf.shift());
    }
  }

  return sorted.concat(leftHalf).concat(rightHalf);
}
