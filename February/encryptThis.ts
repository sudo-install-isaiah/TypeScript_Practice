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
	return str
		.split(" ")
		.map(word => {
			return word
				.split("")
				.map((letter, index) => {
					if (index === 0) {
						return letter.charCodeAt(0).toString();
					}
					if (index === 1) {
						return word[word.length - 1];
					}
					if (index === word.length - 1) {
						return word[1];
					}
					return letter;
				})
				.join("");
		})
		.join(" ");
};
