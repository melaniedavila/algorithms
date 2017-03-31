// Time Complexity: O(n * m)
// Space Complexity: O(n)
// n is amount of money
// m is the number of potential denominations

function makeChange(amount, denominations) {

  // Index is amount and value is number of ways of getting that amount
  let numWaysToMakeNCents = new Array(amount + 1).fill(0);
  numWaysToMakeNCents[0] = 1;

  denominations.forEach(function (coin) {
    for (let i = coin; i <= amount; i++) {
      let remainder = i - coin;
      numWaysToMakeNCents[i] += numWaysToMakeNCents[remainder];
    }

  });

  return numWaysToMakeNCents[amount];
}

makeChange(4, [1,2,3]);
