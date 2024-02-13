// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string

// "CodEWaRs"-- > [0, 3, 4, 6];

export function capitals(word: string): number[] {
	// Write your code here
	return word.split("").reduce((acc, curr, index): Array<number> => {
		if (curr === curr.toUpperCase()) {
			acc.push(index);
		}
		return acc;
	}, [] as number[]);
}
