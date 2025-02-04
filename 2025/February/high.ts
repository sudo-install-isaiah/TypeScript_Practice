// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

export const high = (str: string): string => {
	// iterate through the string and split based on spaces
	let strArray = str.split(" ");
	// func that takes a string and returns the sum of the points
	function addCount(str: string): number {
		return str
			.split("")
			.map(x => x.charCodeAt(0) - 96)
			.reduce((curr, acc) => {
				return curr + acc;
			}, 0);
	}

	let result = "";
	let resultCount = addCount(result);
	// with this new array, iterate through it and add up the points
	strArray.forEach(word => {
		// if current word is more than result replace result
		let count = addCount(word);
		if (count > resultCount) {
			result = word;
			resultCount = count;
		}
	});
	return result;
};
