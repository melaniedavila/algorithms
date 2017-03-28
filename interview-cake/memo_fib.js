// Returns the nth number in the fibonacci sequence with a starting
// point of 1

function memoFib(n) {
  let storedFibs = {};
  if (n < 0) {
    throw new Error('Invalid input.');
  } else if (n === 0 || n === 1) {
    return n;
  }

  if (storedFibs[n]) {
    return storedFibs[n];
  }

  let fibResult = memoFib(n - 1) + memoFib(n - 2);
  storedFibs[n] = fibResult;

  return fibResult;
}
