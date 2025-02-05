// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

export function isPalindrome(x: string): boolean {
	// split and slice, reverse
	const lowerX = x.toLowerCase();

	return lowerX == lowerX.split("").reverse().join("").toString();
}
