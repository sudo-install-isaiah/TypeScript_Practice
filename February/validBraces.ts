// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

export function validBraces(braces: string): boolean {
	const bracesArray = braces.split("");

	let stack: Array<string> = [];
	const pairs: { [key: string]: string } = {
		"(": ")",
		"[": "]",
		"{": "}",
	};
	for (let i = 0; i < bracesArray.length; i++) {
		if (
			bracesArray[i] === "(" ||
			bracesArray[i] === "[" ||
			bracesArray[i] === "{"
		) {
			stack.push(bracesArray[i]);
		} else {
			let last: string | undefined = stack.pop();

			if (last === undefined || pairs[last] !== bracesArray[i]) {
				return false;
			}
		}
	}
	return stack.length === 0;
}
