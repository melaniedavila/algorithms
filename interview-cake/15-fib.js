// Time Complexity: O(n)
// Space Complexity: O(1)

function fib(n) {

  if (n < 0) {
    throw new Error('n cannot be negative');
  } else if (n === 0 || n === 1) {
    return n;
  }

  let penultimateFib = 0;
  let ultimateFib = 1;
  let currentFib;

  for (let i = 1; i < n; i++) {
    currentFib = penultimateFib + ultimateFib;
    penultimateFib = ultimateFib;
    ultimateFib = currentFib;
  }

  return currentFib;
}
