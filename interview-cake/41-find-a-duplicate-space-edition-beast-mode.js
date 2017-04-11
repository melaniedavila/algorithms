// Time Complexity: O(n)
// Space Complexity: O(1)

function findDuplicate(nums) {
  const maxNum = nums.length - 1;

  // Note: position != index
  let positionInCycle = maxNum + 1;
  for (let i = 0; i < maxNum; i++) {

    // We subtract 1 from the current position to step ahead
    positionInCycle = nums[positionInCycle - 1];
  }

  // We will find the length of the cycle by remembering a position in
  // the cycle. We will then count the steps it takes to get back to
  // that position.
  const rememberedPositionInCycle = positionInCycle;
  let currentPositionInCycle = nums[positionInCycle - 1];
  let cycleStepCount = 1;

  while (currentPositionInCycle !== rememberedPositionInCycle) {
    currentPositionInCycle = nums[currentPositionInCycle - 1];
    cycleStepCount += 1;
  }

  // We look for the first node of the cycle.
  let startingPointer = maxNum + 1;
  let subsequentPointer = maxNum + 1;
  for (let i = 0; i < cycleStepCount; i++) {
    subsequentPointer = nums[startingPointer - 1];
  }

  // We continue to advance until the pointers are in the same position.
  while (startingPointer !== subsequentPointer) {
    startingPointer = nums[startingPointer - 1];
    subsequentPointer = nums[subsequentPointer - 1];
  }

  return startingPointer;
}
