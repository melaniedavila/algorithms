// Time Complexity: O(log n)

function binarySearch(nums, target) {
  let minIndex = 0;
  let maxIndex = nums.length - 1;
  let midIndex = Math.floor((maxIndex + minIndex) / 2);

  while (minIndex <= maxIndex) {
    let currentNum = nums[midIndex];

    if (currentNum === target) {
      return midIndex;
    } else if (currentNum < target) {
      minIndex = midIndex + 1;
    } else {
      maxIndex = midIndex - 1;
    }
    midIndex = Math.floor((maxIndex + minIndex) / 2);
  }

  // Target was not found
  return -1;
}
