// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis "Hello" == "72olle"
// encryptThis "good" == "103doo"
// encryptThis "hello world" == "104olle 119drlo"

export const encryptThis = (str: string): string => {
	// Your code goes here
	const words = str.split(" ");
	return words
		.map((char, index) => {
			if (index === 0) {
				return char.charCodeAt(0);
			}
			if (index === 1) {
				return words[words.length - 1];
			}
			if (index === words.length - 1) {
				return words[1];
			}
		})
		.join(" ");

};
