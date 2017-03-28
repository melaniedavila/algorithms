// Time Complexity: O(n)
// Space Complexity: O(n)

function countingSort(arr, maxValue) {
  let numCounts = new Array(maxValue + 1).fill(0);
  let currNum;

  for (let i = 0; i < arr.length; i++) {
    currNum = arr[i];
    numCounts[currNum] += 1;
  }

  let sorted = [];
  for (let num = 0; num < numCounts.length; num++) {
    let quantityOfNum = numCounts[num];
    for (let j = 0; j < quantityOfNum; j++) {
      sorted.push(num);
    }
  }

  return sorted;
}
