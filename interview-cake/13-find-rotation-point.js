// Time Complexity: O(lg n)
// Space Complexity: O(1)

function findRotationPoint(words) {
  const firstWord = words[0];

  let minIndex = 0;
  let maxIndex = words.length - 1;

  while (minIndex < maxIndex) {
    let midIndex = Math.floor((maxIndex - minIndex) / 2);
    let currentWord = words[midIndex];

    if (currentWord > firstWord) {
      minIndex = midIndex;
    } else {
      maxIndex = midIndex;
    }

    if (minIndex + 1 === maxIndex) {
      break;
    }
  }

  return maxIndex;
}
