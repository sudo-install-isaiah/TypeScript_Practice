export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
	// iterate through the list of cat and create objects for each key
	let count = listOfCat.reduce((acc, curr) => {
		acc[curr] = 0;
		return acc;
	}, {} as { [key: string]: number });
	// iterate through the books array, split each element and find the first letter and the positive integer
	listOfArt.forEach(ele => {
		let splitArr = ele.split(" ");
		let category = splitArr[0][0];
		let number = splitArr[1];
		count[category] += Number(number);
	});
	let result = "";

	for (let key in count) {
		result += `(${key} : ${count[key]}) - `;
	}
	result = result.slice(0, -3);
	return result;
};
