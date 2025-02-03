// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

export function findNextSquare(sq: number): number {
	// Return the next square if sq is a perfect square, -1 otherwise
	const isSquareRoot = (num: number) => {
		const squareRoot = Math.sqrt(num);
		return squareRoot === Math.floor(squareRoot);
	};

	if (isSquareRoot(sq)) {
		//add 1 until isSquareRoot == true
		const nextSquare = () => {
			let newSq = sq + 1;
			while (isSquareRoot(newSq) !== true) {
				newSq += 1;
			}
			return newSq;
		};
		return nextSquare();
	}

	return -1;
}

// export function findNextSquare(sq:number):number {
//   return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1
// }
