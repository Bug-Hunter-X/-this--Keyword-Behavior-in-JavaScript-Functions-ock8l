# JavaScript 'this' Keyword Bug

This repository demonstrates a common source of confusion in JavaScript: the behavior of the `this` keyword.

The `bug.js` file shows how the value of `this` changes based on the function call context.  The `bugSolution.js` file offers a solution by using `bind`, `call`, or `apply` to explicitly set the value of `this` for more predictable behavior.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and observe the output in your browser's console or Node.js environment.
3. Compare the results to the solution in `bugSolution.js`.