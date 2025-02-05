// Write a function to find the nth Fibonacci number.

// The Fibonacci sequence is a series of numbers where a number is found by adding up the two numbers before it.
// Starting with 0 and 1, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, and so on.
// Return the nth Fibonacci number for the given n.

function fibonacci(n) {
	//base case of when to stop the function
	if (n <= 1) {
		return n;
	}

	//recursive case
	// return fibonacci(n - 1) + fibonacci(n - 2);

	// iterative approach
	let prev = 0;
	let curr = 1;

	for (let i = 2; i <= n; i++) {
		let next = prev + curr;
		prev = curr;
		curr = next;
	}

	return curr;
}
