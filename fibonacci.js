// Fib(0) = 0
// Fib(1) = 1
// Fib(n) = Fib(n-1) + Fib(n-2)
// E.g., 0, 1, 1, 2, 3, 5, 8, 13, 21, …

function fib_recursive(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib(n-1) + fib(n-2);
}

function fib_iterative(n) {
  let a = 0; let b = 1; let result = 0;
  for (let i=0; i<n; i++) {
      result = a + b;   a = b;   b = result;
  }
  return result;
}

let memo = [];
function fib_memo(n) {
  if (memo[n]) return memo[n];
  if (n == 0) return 0;
  if (n == 1) return 1;
  let result = fib(n-1) + fib(n-2);
  memo[n] = result;
  return result;
}

// Double recursion is slow!  O(Fib(n))
// Iteration is fast! O(n)
// Memoization makes recursion like iteration.
