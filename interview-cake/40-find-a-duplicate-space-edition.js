// Time Complexity: O(n log n)
// Space Complexity: O(1)

function findDuplicate(nums) {
  let minNum = 1;
  let maxNum = nums.length - 1;

  while (minNum < maxNum) {
    let midpoint = Math.floor(minNum + ((maxNum - minNum) / 2));
    let lowerRangeMinNum = minNum;
    let lowerRangeMaxNum = midpoint;
    let upperRangeMinNum = midpoint + 1;
    let upperRangeMaxNum = maxNum;

    let distinctPossibleIntegersInLowerRange = lowerRangeMaxNum - lowerRangeMinNum + 1;

    let elementsInLowerRange = 0;
    nums.forEach(function (element) {
      if (element >= lowerRangeMinNum && element <= lowerRangeMaxNum) {
        elementsInLowerRange += 1;
      }
    });

    if (elementsInLowerRange > distinctPossibleIntegersInLowerRange) {
      // there must be a duplicate in the lower range
      minNum = lowerRangeMinNum;
      maxNum = lowerRangeMaxNum;
    } else {
      // there must be a duplicate in the upper range
      minNum = upperRangeMinNum;
      maxNum = upperRangeMaxNum;
    }
  }

  // minNum and maxNum have converged
  return minNum;
}
