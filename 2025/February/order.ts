// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

export function order(words: string): string {
	if (words.length == 0) return "";
	// iterate through the string and split on each word
	let wordsArr = words.split(" ");
	// sort based on if the charCodeAt is within 47-56 and whichever is lower
	let resultsArr = wordsArr.sort((a, b) => {
		// split for each character and then find() charcodeat
		let valueA = a.split("").find(char => {
			return char.charCodeAt(0) >= 49 && char.charCodeAt(0) <= 57;
		});
		let valueB = b.split("").find(char => {
			return char.charCodeAt(0) >= 49 && char.charCodeAt(0) <= 57;
		});

		if (valueA && valueB) {
			return parseInt(valueA) > parseInt(valueB) ? 1 : -1;
		}
		return 0;
	});

	return resultsArr.join(" ");
}
